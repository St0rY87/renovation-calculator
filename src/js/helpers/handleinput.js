const handleInput = () => {
    const inputs = document.querySelectorAll('.calculator__item-input');

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value;
            value = value.replace(/\D/g, '');
            if (value > 3) {
                value = value.slice(0, 3)
            }
            e.target.value = value;
        })
    })

}



export default handleInput;