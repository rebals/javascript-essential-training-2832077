/**
 * Lunchbox object
 */

const lunchbox = {
  name: "Daily Lunckbox",
  color: "blue",
  style: "soft",
  sectionNum: 5,
  foodOption: {
    lunchOne: ["chips", "sandwhich", "carrots", "dip", "grapes"],
    lunchTwo: ["salad", "soup", "crackers"],
    lunchThree: ["apple", "broccli", "wrap", "peanut butter"],
  },
};

console.log("Today lunch:", lunchbox.foodOption["lunchOne"]);
