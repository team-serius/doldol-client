import { Button, Typography } from "@ui/components";

import { DETAIL } from "@/common/constants/landing/detail";
import Image from "next/image";
import { TabMenu } from "@/components/common/TabMenu";
import { useState } from "react";

const TAB_MENU = DETAIL.map((item) => item.label);

export function DetailFunctions() {
  const [selected, setSelected] = useState<string>(TAB_MENU[0]);

  const current = DETAIL.find((d) => d.label === selected);

  const onItemClick = (item: string) => {
    setSelected(item);
  };

  return (
    <div className="mt-20 flex flex-col items-center mb-48">
      <TabMenu
        menuItems={TAB_MENU}
        activeItem={selected}
        onItemClick={onItemClick}
      />

      {current && (
        <div className="flex gap-8 mt-8">
          {current.type === "video" ? (
            <video
              src={current.videoPath}
              autoPlay
              loop
              muted
              playsInline
              width={300}
              height={650}
              className="w-48 h-auto rounded-xl shadow-md"
            ></video>
          ) : (
            <Image
              src={current.image}
              alt={current.label}
              width={300}
              height={650}
              className="w-48 h-auto rounded-xl shadow-md"
            />
          )}
          <div className="text-center flex-grow">
            <Typography variant="b15" className="mt-32">
              {current.description}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}
