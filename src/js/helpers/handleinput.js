const handleInput = () => {
    const inputs = document.querySelectorAll('.calculator__item-input');

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value;
            value = value.replace(/[^0-9-]/g, '');

            if (value.length > 3) {
                value = value.slice(0, 3);
            };

            if (value.indexOf('-') !== -1) {
                const parts = value.split('-');
                value = '-' + parts.join('');
                e.target.classList.add('error-input');
                console.log(e.target);
            }
            else e.target.classList.remove('error-input');

            e.target.value = value;
        })
    })
}


export default handleInput