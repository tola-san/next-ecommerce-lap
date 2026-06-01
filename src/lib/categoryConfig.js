import {
  BsBag,
  BsLaptop,
  BsPhone,
  BsWatch,
} from "react-icons/bs";

export const categoryConfig = {
  laptops: {
    icon: BsLaptop,
  },

  smartphones: {
    icon: BsPhone,
  },

  watches: {
    icon: BsWatch,
  },

  default: {
    icon: BsBag,
  },
};



//  bg color id based on index of category in categories array

export const categoryThemes = [
  {
    bg: "bg-pink-100",
    text: "text-pink-600",
    border: "border-pink-200",
  },
  {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200",
  },
  {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
  },
  {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    border: "border-yellow-200",
  },
  {
    bg: "bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-200",
  },
];

export function getCategoryTheme(key) {
  const hash = String(key)
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  return categoryThemes[hash % categoryThemes.length];
}