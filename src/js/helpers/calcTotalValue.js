const calcTotalValue = (storageData, dataAttribute, event) => {
    try {
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
            storageData.squares[key] = sum;
        }
    } catch (error) { }
}
export default calcTotalValue;