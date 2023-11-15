const API = {
  PRODUCTS_LIST:
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json",
};

export default API;

export const ALL_FILTERS = [
  {
    name: "Colour",
    options: ["Red", "Blue", "Green", "Grey", "Pink"],
  },
  {
    name: "Gender",
    options: ["Men", "Women"],
  },
  {
    name: "Price",
    options: ["Rs 0-250", "Rs 251-450", "Rs 450"],
  },
  {
    name: "Type",
    options: ["Polo", "Hoodie", "Basic"],
  },
];
