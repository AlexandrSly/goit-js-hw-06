const categoriesEl = document.querySelectorAll(".item");
const amountCategoriesEl = `Number of categories: ${categoriesEl.length}`;
console.log(amountCategoriesEl);

const categoriesElValue = document.querySelectorAll(".item");

categoriesElValue.forEach((category) => {
  console.log(" ");

  const nameСategory = category.querySelector("h2").textContent;
  console.log("Category:", nameСategory);

  const elementAmount = category.querySelector("ul").children.length;
  console.log("Elements:", elementAmount);
});
