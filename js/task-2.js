const  ingredients  =  [
    'Картошка' ,
    'Гриби' ,
    'Чеснок' ,
    'Помідори' ,
    'Зелень' ,
    'Приправи' ,
  ];

  const ingredientsList = document.querySelector('#ingredients')
  const element = ingredients.map(option => {
    const ingredientsListElement = document.createElement('li')
    ingredientsListElement.textContent = option
    console.log(ingredientsListElement)
    return ingredientsListElement
  })
 ingredientsList.append[...element]);

//const ingredientsList = document.querySelector('#ingredients')
//const makeIngredientsList = option => {
//  return ingreduents.map(option => {
//    const ingredientListEl = document.createElement('li');
//  ingredientListEl.textContent = option;

//  return ingredientsList;
//  });
//};
//const elements = makeIngredientsList[ingredients];
//ingredientsList.append(...elements);