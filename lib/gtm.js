export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

export const pageview = (rest) => {
  window.dataLayer.push({
    event: "pageview",
    ...rest,
  });
};

export const adobeview = () => {
  var detail = {
    eventType: "navigation",
    type: "screen",
    data: {
      currentUri: location.href,
      friendlyUri: location.pathname.replace("/", ":"),
      path: location.pathname,
      appName: "origin-shift",
    },
  };
  _satellite.track("dcr:navigation", detail);
};
