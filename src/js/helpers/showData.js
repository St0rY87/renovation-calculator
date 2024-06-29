import { getResource } from '../services/services';
const showData = () => {
    const listItems = document.querySelector('.calculator__content_square'),
        // container = document.querySelector('.calculator__wrapper'),
        overlay = document.querySelector('.overlay');
    overlay.classList.remove('none')
    getResource('http://localhost:3000/squares')
        .then(res => {
            overlay.classList.add('none')
            res.forEach(item => {
                const { name, value, id } = item;
                const li = document.createElement('LI');
                li.classList.add('calculator__item');
                li.id = id;
                li.innerHTML = `<label class="calculator__item-text"><span>${name}:</span>
                        <div class="calculator__item-inner">
                            <input class="calculator__item-input" type="text" placeholder="0.0">
                            <span class="calculator__item-symb">м2</span>
                        </div>
                    </label>`;

                listItems.appendChild(li);
                document.querySelectorAll('.calculator__item-input').forEach(item => item.value = value);
            })

        })
}

export default showData