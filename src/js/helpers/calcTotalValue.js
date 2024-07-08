const calcTotalValue = (storageData, dataAttribute, event) => {
    let inputs = document.querySelectorAll(dataAttribute);
    inputs = Array.from(inputs);
    const key = inputs[0].dataset.type,
        target = event.target;
    if (target) {
        const sum = inputs.reduce((currentSum, input) => {
            const value = Number(input.value);
            if (value < 0 || isNaN(value)) {
                return currentSum //skip iteration
            }
            return currentSum + value;
        }, 0)
        storageData[key] = sum;
    }
}

export default calcTotalValue;