import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

let mixpanelInstance: typeof mixpanel | null = null;

export const initMixpanel = () => {
  if (mixpanelInstance) {
    return mixpanelInstance;
  }

  if (!MIXPANEL_TOKEN) {
    return null;
  }

  const isDevelopment = process.env.NODE_ENV === "development";

  mixpanel.init(MIXPANEL_TOKEN, {
    autocapture: true,
    debug: false,
  });

  mixpanelInstance = mixpanel;

  return mixpanelInstance;
};

export { mixpanelInstance };
