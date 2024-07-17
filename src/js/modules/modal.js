import { checkUserInLocalStorage } from "./localStorage";

const openModal = () => {
    try {
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
    } catch (error) { }

}
export default openModal;
