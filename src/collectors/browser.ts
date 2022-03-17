import { CollectorData } from "../types/collectors";

export const generate = (data: CollectorData): BrowserData => {
  return {
    referrer: data.referrer,
    userAgent: data.userAgent,
    location: data.location,
    webDriver: false,
  };
};

export interface BrowserData {
  referrer: string;
  userAgent: string;
  location: string;
  webDriver: boolean;
}
