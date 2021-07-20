const ingredients = ['Картопля', 'Гриби', 'Часник', 'Томат', 'Зелень', 'Спеції',];

  const ingredientsList = document.querySelector('#ingredients');

  const element = ingredients.map(option => {
    const ingredientsListElement = document.createElement('li')
    ingredientsListElement.textContent = option
    console.log(ingredientsListElement)
    return ingredientsListElement
  })
 ingredientsList.append(...element);