const handleInput = () => {
    const inputs = document.querySelectorAll('.calculator__item-input');

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value;
            value = value.replace(/[^0-9-]/g, '');

            if (value.length > 3) {
                value = value.slice(0, 3);
            };

            if (value.indexOf('-') !== -1) {
                const parts = value.split('-');
                value = '-' + parts.join('');
                e.target.classList.add('error-input');
            }
            else e.target.classList.remove('error-input');

            e.target.value = value;
        })
    })
}

const checkMaxLengthInput = (selectorInputLogin, selectorInputs, classNameError, maxLengthInput, selectorErrorText) => {
    const inputs = document.querySelectorAll(selectorInputs),
        inputLogin = document.querySelector(selectorInputLogin),
        errorText = document.querySelector(selectorErrorText);
    if (inputLogin) {
        inputLogin.addEventListener('input', () => {
            if (inputLogin.value.length > maxLengthInput) {
                inputs.forEach(input => input.classList.add(classNameError));
                errorText.classList.remove('none');
            }
            else {
                inputs.forEach(input => input.classList.remove(classNameError));
                errorText.classList.add('none');
            }
        })
    }



}

export default handleInput;
export { checkMaxLengthInput };