import { atom } from "recoil";

const homeState = atom({
  key: "homeState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export default homeState;