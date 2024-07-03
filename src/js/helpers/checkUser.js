import { checkMaxLengthInput } from "./handleInput";

const checkUser = (item, form) => {
    const login = form.login.value,
        password = form.password.value,
        errorText = form.querySelector('.errorText'),
        inputs = form.querySelectorAll('input');
    let isLogin = false;
    item.forEach(user => {
        if (user.login === login && user.password === password) {
            errorText.classList.add('none');
            inputs.forEach(input => {
                input.classList.remove('errorBorder');
            })
            isLogin = true;
            window.location.href = '/repair-cost.html';
        } else {
            if (isLogin) {
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
};
checkMaxLengthInput('#login', '.popup-admin__form-input', 'errorBorder', '4', '.errorText');

export default checkUser;