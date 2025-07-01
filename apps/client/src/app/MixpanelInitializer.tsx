"use client";

import { initMixpanel, mixpanelInstance } from "../lib/mixpanelClient";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MixpanelInitializer() {
  useEffect(() => {
    initMixpanel();
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    if (mixpanelInstance) {
    }
  }, [pathname]);

  return null;
}
