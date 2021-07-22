
//скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.

const ingredients = ['Картопля', 'Гриби', 'Часник', 'Томат', 'Зелень', 'Спеції',];

  const ingredientsList = document.querySelector('#ingredients');

  const element = ingredients.map(option => {
    const ingredientsListElement = document.createElement('li')
    ingredientsListElement.textContent = option
    console.log(ingredientsListElement)
    return ingredientsListElement
  })
 ingredientsList.append(...element);