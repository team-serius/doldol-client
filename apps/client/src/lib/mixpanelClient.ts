import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

let mixpanelInstance: typeof mixpanel | null = null;

export const initMixpanel = () => {
  if (mixpanelInstance) {
    return mixpanelInstance;
  }

  if (!MIXPANEL_TOKEN) {
    console.warn("Mixpanel token is missing! Check your .env file.");
    return null;
  }

  const isDevelopment = process.env.NODE_ENV === "development";

  mixpanel.init(MIXPANEL_TOKEN, {
    autocapture: true,
    debug: isDevelopment,
  });

  mixpanelInstance = mixpanel;

  if (isDevelopment && mixpanelInstance.has_opted_in_tracking()) {
    console.log("Mixpanel debug mode is active. Check console for events.");
  }

  return mixpanelInstance;
};

export { mixpanelInstance };
