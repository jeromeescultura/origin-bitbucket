export const GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag("config", GOOGLE_ID, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
