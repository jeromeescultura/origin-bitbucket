export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

export const pageview = (rest) => {
  window.dataLayer.push({
    event: "pageview",
    ...rest,
  });
};

// export const pageview = (url) => {
//   console.log(url, "sdasds");
//   window.gtag("config", GTM_ID, {
//     page_path: url,
//   });
// };

// export const event = ({ action, params }) => {
//   if (window !== undefined) {
//     window.gtag("event", action, params);
//   }
// };
