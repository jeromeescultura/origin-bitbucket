export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

// export const pageview = (url) => {
//   // console.log(url, "url");
//   window.dataLayer.push({
//     event: "pageview",
//     page: url,
//   });
// };

export const pageview = (url) => {
  window.gtag("config", GTM_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  if (window !== undefined) {
    window.gtag("event", action, params);
  }
};
