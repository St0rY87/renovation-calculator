const showCurrency = (state, selectorElem) => {
    const elem = document.querySelector(selectorElem);
    if (elem) {
        elem.textContent = state.totalSum;
    }
}

export default showCurrency;