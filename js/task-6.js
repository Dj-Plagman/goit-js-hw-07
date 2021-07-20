

const inputName = document.querySelector('#validation-input')

inputName.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length !== inputName.dataset.length) {
        inputName.classList.add('invalid');
    } else {
        inputName.classList.remove('invalid', 'valid');
    }
};