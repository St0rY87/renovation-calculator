import { checkMaxLengthInput } from "./handleInput";
import addUserLocalStorage from "../modules/localStorage";

const checkUser = (item, form) => {
    try {
        const login = form.login.value,
            password = form.password.value,
            errorText = form.querySelector('.errorText'),
            inputs = form.querySelectorAll('input');
        let isActiveUser = false;
        item.forEach(user => {
            if (user.login === login && user.password === password) {
                isActiveUser = true;
                addUserLocalStorage(login, isActiveUser);
                errorText.classList.add('none');
                inputs.forEach(input => {
                    input.classList.remove('errorBorder');
                })
                window.location.href = '/repair-cost.html';
            } else {
                if (isActiveUser) {
                    errorText.classList.add('none');
                    inputs.forEach(input => {
                        input.classList.remove('errorBorder');
                    })
                }
                else {
                    errorText.classList.remove('none');
                    inputs.forEach(input => {
                        input.classList.add('errorBorder');
                    })
                }
            }
        });
    } catch (error) { }
};
try {
    checkMaxLengthInput('#login', '.popup-admin__form-input', 'errorBorder', '20', '.errorText');
} catch (error) { }

export default checkUser;