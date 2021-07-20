
//const categoriesListEl = document.querySelectorAll('.item')
//const showNumbersOfCategories = element => `В списке ${element.length} категории.`
//console.log(showNumbersOfCategories(categoriesListEl));
//const showCategories = element => element.forEach(el =>
//    console.log(`Категория: ${el.querySelector(`h2`).textContent}.
//     Количество элементов: ${el.querySelectorAll(`li`).length}.`))
//showCategories(categoriesListEl);

const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);