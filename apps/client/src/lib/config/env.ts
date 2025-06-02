export const IS_PRODUCTION = process.env.IS_PRODUCTION == '1';
export const IS_DEV = process.env.IS_DEV == '1';
export const IS_STAGING = process.env.IS_STAGING == '1';

export const API_URI = process.env.API_URI ?? '';
export const SITE_URI = process.env.SITE_URI ?? '';

export const GA_TRACKING_ID = process.env.GA_TRACKING_ID ?? '';

export const REVALIDATE_SECRET_KEY = process.env.REVALIDATE_SECRET_KEY ?? '';
