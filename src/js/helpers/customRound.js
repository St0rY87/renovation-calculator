const customRound = (number) => {
    if (number % 1 >= 0.5) {
        return Math.ceil(number);
    } else {
        return Math.floor(number);
    }
}

export default customRound;