import { exitActiveUSerLocalStorage } from "../modules/localStorage";

const backToMainPage = () => {
    const btn = document.querySelector('.button_repair-cost');
    if (btn) {
        btn.addEventListener('click', () => {
            exitActiveUSerLocalStorage();
        })
    }
}

export default backToMainPage;