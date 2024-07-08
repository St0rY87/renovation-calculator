import calcTotalValue from "./calcTotalValue";
import { changeData } from "../services/services";



const handleInput = () => {
    const inputs = document.querySelectorAll('.calculator__item-input');

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value;
            value = value.replace(/[^0-9-.]/g, '');

            if (value.length > 6) {
                value = value.slice(0, 6);
            }

            if ((value.match(/\./g) || []).length > 1) {
                value = value.slice(0, -1);
            }

            if (value.includes('.')) {
                const parts = value.split('.');
                if (parts[1].length > 1) {
                    parts[1] = parts[1].slice(0, 1);
                }
                value = parts.join('.');
            }

            if (value.length > 1 && value[0] === '0' && value[1] !== '.') {
                value = value.slice(1);
            }

            if (value.indexOf('-') !== -1) {
                const parts = value.split('-');
                value = '-' + parts.join('').replace(/-/g, '');
                e.target.classList.add('error-input');
            } else {
                e.target.classList.remove('error-input');
            }

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

const handleInputsRepairCost = () => {
    const list = document.querySelector('.calculator__content_repair-cost');
    if (list) {
        list.addEventListener('change', (e) => {
            const target = e.target;
            console.log(target);
            if (target) {
                const id = target.parentElement.parentElement.parentElement.id;
                let value = target.value;
                if (value < 0) {
                    value = 0;
                }
                changeData('http://localhost:3000/operations/', id, value)
            }
        })
    }
}

const handleInputSquare = (state) => {
    const list = document.querySelector('.calculator__content_square');
    if (list) {
        list.addEventListener('input', (e) => {
            calcTotalValue(state, '[data-type="common"]', e);
            calcTotalValue(state, '[data-type="bathroom"]', e);
            console.log(state)
        })
    }

}

const getCeilingHeight = (state) => {
    const parent = document.querySelector('.calculator__item-inner');
    if (parent) {
        parent.addEventListener('input', e => {
            calcTotalValue(state, '[data-type="ceiling"]', e);
            console.log(state)
        })
    }

}

export default handleInput;
export { checkMaxLengthInput };
export { handleInputsRepairCost };
export { handleInputSquare };
export { getCeilingHeight };
