import * as fbq from "../lib/fpixel";
import * as ga from "../lib/gtm";

export const ButtonTrackingEvent = (name, value) => {
  console.log(name, "name");
  // fbq.event(name, { name: name, value: value });
  ga.event(name, { name: name, value: value });
};

// export const DropdownTrackingEvent = (name, value) => {
//   fbq.event(name, { name: name, value: value });
// };
