// utils/getUserCategories.js
export const getUserCategories = (userDetails) => {
  if (userDetails?.categories && userDetails.categories.length > 0) {
    return userDetails.categories;
  }

  if (userDetails?.category) {
    try {
      return JSON.parse(userDetails.category);
    } catch (error) {
      console.error("Failed to parse category JSON:", error);
    }
  }

  return [];
};
