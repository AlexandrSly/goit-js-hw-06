const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsList = document.querySelector("#ingredients");

// const ingredientt = ingredients.reduce((acum, ingredient) => {
//   return (acum += `<li class = "item" >${ingredient}</li>`);
// }, "");

// ingredientsList.innerHTML = ingredientt;

const ingredientsList = document.querySelector("#ingredients");

const ingredientsEl = [];
console.log(ingredientsEl);
for (let i = 0; i < ingredients.length; i++) {
  ingredientsEl.push(`<li class = "item" >${ingredients[i]}</li>`);
}

ingredientsList.innerHTML = ingredientsEl.join("");
