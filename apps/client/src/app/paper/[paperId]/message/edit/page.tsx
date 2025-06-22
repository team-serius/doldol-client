"use client";

import { AxiosError, isAxiosError } from "axios";
import { use, useEffect, useState } from "react";

import { CreateMessageRequest } from "@/types/message";
import { ErrorDTO } from "@/types/error";
import { HELPER_MESSAGES } from "@libs/utils/message";
import { Notify } from "@ui/components";
import dynamic from "next/dynamic";
import { postMessage } from "@/services/message";
import { useMessageForm } from "@/hooks/form/useMessageForm";
import { useMutation } from "@tanstack/react-query";

type MessageEditStage =
  | "selectPerson"
  | "editMessage"
  | "checkMessage"
  | "complete";

const Content = {
  selectPerson: dynamic(
    () => import("@/containers/paper/message/SelectPerson"),
    {
      ssr: false,
      loading: () => <div>Loading...</div>, // 스켈레톤 대체
    },
  ),
  editMessage: dynamic(() => import("@/containers/paper/message/Edit"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  checkMessage: dynamic(() => import("@/containers/paper/message/Check"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  complete: dynamic(() => import("@/containers/paper/message/Complete"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
};

const MessageEditPage = ({
  params,
  searchParams,
}: {
  params: Promise<{ paperId: string }>;
  searchParams: Promise<{ messageId?: string }>;
}) => {
  const { paperId } = use(params);
  const { messageId } = use(searchParams);
  const [stage, setStage] = useState<MessageEditStage>("selectPerson");
  const [userName, setUserName] = useState<string | null>(null);

  const { setValue, register, watch, errors } = useMessageForm();

  const {
    mutate: onPostMessageApi,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data: CreateMessageRequest) => {
      return postMessage(data);
    },
    mutationKey: ["postMessage", watch("paperId"), watch("receiverId")],
    onSuccess: (res) => {
      if (res) {
        Notify.success(HELPER_MESSAGES.createMessageSuccess);
        setStage("complete");
      }
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(error.response?.data.message);
      }
    },
  });

  useEffect(() => {
    if (messageId) {
      // 수정 모드
      // TODO: API 호출로 메시지 데이터 가져오기, 대상 유저 설정
      setStage("editMessage");
    }
  }, [messageId]);

  const onNext = (userId?: string, userName?: string) => {
    switch (stage) {
      case "selectPerson":
        if (userId) {
          setValue("receiverId", Number(userId));
          setStage("editMessage");
        }
        if (userName) {
          setUserName(userName);
        }
        break;
      case "editMessage":
        if (errors.content) {
          Notify.error(errors.content.message);
          return;
        }
        if (errors.from) {
          Notify.error(errors.from.message);
          return;
        }
        setStage("checkMessage");
        break;
      case "checkMessage":
        if (isPending) return;

        onPostMessageApi({
          paperId: Number(paperId),
          receiverId: Number(watch("receiverId")),
          content: watch("content"),
          from: watch("from"),
          fontStyle: watch("fontStyle"),
          backgroundColor: watch("backgroundColor"),
        });
        break;
    }
  };

  return (
    <div className="px-6 pb-10">
      {stage === "selectPerson" && (
        <Content.selectPerson paperId={paperId} onNext={onNext} />
      )}
      {stage === "editMessage" && (
        <Content.editMessage
          register={register}
          watch={watch}
          setValue={setValue}
          onNext={onNext}
        />
      )}
      {stage === "checkMessage" && userName && (
        <Content.checkMessage
          watch={watch}
          userName={userName}
          onNext={onNext}
          isLoading={isPending || isSuccess}
        />
      )}
      {stage === "complete" && userName && (
        <Content.complete paperId={paperId} userName={userName} />
      )}
    </div>
  );
};

export default MessageEditPage;
