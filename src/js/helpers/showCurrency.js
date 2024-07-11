import { getResource } from "../services/services";

const displayTotalCost = (state, selectorElem) => {
    const elem = document.querySelector(selectorElem);
    if (elem) {
        elem.textContent = state.totalSum;
    }
}

const displayCurrency = (state, selectorElem) => {
    const elem = document.querySelector(selectorElem);
    if (elem) {
        if (state.totalSum && state.exchangeRate) {
            const value = (state.totalSum / state.exchangeRate).toFixed(1);
            elem.textContent = value
        }
    }
}

export default displayTotalCost;
export { displayCurrency }