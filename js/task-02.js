const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientt = ingredients.reduce((acum, ingredient) => {
  return (acum += `<li class = "item" >${ingredient}</li>`);
}, "");

ingredientsList.innerHTML = ingredientt;
