/* eslint-disable no-restricted-imports */
import {
  captureEvent as _captureEvent,
  captureException as _captureException,
} from "@sentry/react";
import mixpanel from "mixpanel-browser";

const isDevelopmentWithoutAnalytics =
  process.env.NODE_ENV === "development" &&
  !process.env.NEXT_PUBLIC_DEVELOPMENT_ANALYTICS;

if (
  process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN &&
  !isDevelopmentWithoutAnalytics
) {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN, {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });
}

export const useAnalytics = () => {
  const captureException: typeof _captureException = (
    error: any,
    hint: any,
  ) => {
    return _captureException(error, hint);
  };

  const setAnalyticsUserId = (userId: string) => {
    mixpanel.reset();
    mixpanel.identify(userId);
  };

  const unsetAnalyticsUserId = () => {
    mixpanel.reset();
  };

  const track = (eventName: string, eventData?: { [key: string]: any }) => {
    if (isDevelopmentWithoutAnalytics) {
      return;
    }
    mixpanel.track(eventName, {
      eventData,
      project: process.env.NEXT_PUBLIC_PROJECT_NAME ?? "unknown",
      env: process.env.NODE_ENV,
    });
  };

  return { track, setAnalyticsUserId, unsetAnalyticsUserId, captureException };
};