import { atom } from "recoil";

interface featuresItemsType {
  title: string;
  description: string;
}

export const projects: featuresItemsType[] = [
  {
    title: "Password Generator",
    description:
      "A Great Tool for generating all kind of Password, With OR Without number, special characters, uppercase and lowercase letters.",
  },
  {
    title: "Password Checker",
    description:
      "A Great Tool for checking the strength of your Password, gives strenth in level i.g. weak, medium, strong, baap level.",
  },
];

const featuresItems = atom({
  key: "featuresItems", // unique ID (with respect to other atoms/selectors)
  default: projects, // default value (aka initial value)
});

export default featuresItems;
