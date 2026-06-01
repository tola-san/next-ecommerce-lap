export const categoryThemes = {
  beauty: {
    badge: "bg-pink-100 text-pink-600 border-pink-200",
    glow: "group-hover:bg-pink-50",
  },
  fragrances: {
    badge: "bg-purple-100 text-purple-600 border-purple-200",
    glow: "group-hover:bg-purple-50",
  },
  furniture: {
    badge: "bg-orange-100 text-orange-600 border-orange-200",
    glow: "group-hover:bg-orange-50",
  },
  groceries: {
    badge: "bg-green-100 text-green-600 border-green-200",
    glow: "group-hover:bg-green-50",
  },
  smartphones: {
    badge: "bg-cyan-100 text-cyan-600 border-cyan-200",
    glow: "group-hover:bg-cyan-50",
  },
  laptops: {
    badge: "bg-blue-100 text-blue-600 border-blue-200",
    glow: "group-hover:bg-blue-50",
  },

  default: {
    badge: "bg-green-100 text-green-600 border-green-200",
    glow: "group-hover:bg-green-50",
  },
};

export const getCategoryTheme = (category) =>
  categoryThemes[category] || categoryThemes.default;