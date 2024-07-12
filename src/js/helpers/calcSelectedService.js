const calcSelectedService = (state, typeService) => {
    try {
        const services = state.services.filter(item => item.type === typeService && item.isChecked);
        const sum = services.reduce((totalSum, item) => {
            return totalSum + Number(item.value)
        }, 0)
        return sum
    } catch (error) { }
}


export default calcSelectedService;