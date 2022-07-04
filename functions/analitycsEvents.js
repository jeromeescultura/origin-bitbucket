import * as fbq from "../lib/fpixel";

export const ButtonTrackingEvent = (name, value) => {
  fbq.event(name, { name: name, value: value });
};

// export const DropdownTrackingEvent = (name, value) => {
//   fbq.event(name, { name: name, value: value });
// };
