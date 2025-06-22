import {
  CursorPageParticipantResponse,
  ParticipantRequest,
} from "@/types/participant";
import { apiClient } from "./apiClient";

export const getParticipantList = (data: ParticipantRequest) => {
  return apiClient.get<CursorPageParticipantResponse>(
    `/participants/${data.id}`,
    {
      params: {
        cursorName: data.cursorName,
        cursorId: data.cursorId,
        size: data.size,
      },
    },
  );
};
