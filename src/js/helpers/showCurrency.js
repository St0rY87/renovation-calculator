import { getResource } from "../services/services";

const displayTotalCost = (state, selectorElem) => {
    const elem = document.querySelector(selectorElem);
    if (elem) {
        elem.textContent = state.totalSum;
    }
}

export default displayTotalCost;