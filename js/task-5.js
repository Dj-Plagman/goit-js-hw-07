
//скрипт який, при наборі тексту в інпут input # name-input (подія input),
//підставляє його поточне значення в span # name-output.
//Якщо інпут порожній, в спання повинна відображатися рядок 'незнайомець'.

const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),

};

refs.inputEl.addEventListener("input", (event) => {
    event.currentTarget.value.trim()
    ? refs.outputEl.textContent = event.currentTarget.value:
    refs.outputEl.textContent = 'незнайомець'
});