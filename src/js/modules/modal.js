import { checkUserInLocalStorage } from "./localStorage";
const openModal = () => {
    const btn = document.querySelector('.calc_button'),
        modal = document.querySelector('.popup-admin');
    btn.addEventListener('click', () => {
        if (checkUserInLocalStorage()) {
            window.location.href = '/repair-cost.html';
        }
        else {
            modal.classList.remove('none')
            document.body.style.overflow = 'hidden';
        }
    })
}

export default openModal;