const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsArray = [];

ingredients.forEach((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = `${ingredient}`;
  ingredientEl.classList.add("item");
  ingredientsArray.push(ingredientEl);
});

ingredientsList.append(...ingredientsArray);
