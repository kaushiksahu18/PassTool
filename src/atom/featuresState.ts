import { atom } from "recoil";

const featuresState = atom({
  key: "featuresState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default featuresState;