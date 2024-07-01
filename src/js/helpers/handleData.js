import { getResource } from '../services/services';
const showData = () => {
    const listItems = document.querySelector('.calculator__content_square'),
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

const showDataRequireWorks = () => {
    const listItems = document.querySelector('.calculator__content_require-works'),
        overlay = document.querySelector('.overlay.overlay_require-works');
    overlay.classList.remove('none');
    getResource('http://localhost:3000/operations')
        .then(res => {
            overlay.classList.add('none');
            res.forEach(item => {
                const { name, count, unit, id } = item;
                const li = document.createElement('LI');
                li.classList.add('calculator__item', 'calculator__item_require-works');
                li.id = id;
                li.innerHTML = `<li class="${id}">
                                        <label class="calculator__item-text calculator__item-text_require-works">
                                            <p>${name}
                                                <span
                                                    class=" accent calculator__item-accent calculator__item-accent_require-works ">
                                                    ${count}/${unit}</span>
                                            </p>
                                            <div class="calculator__item-inner  calculator__item-inner_require-works ">
                                                <input type="checkbox" class="checkbox dismantling" name="dismantling">
                                            </div>
                                        </label>
                                    </li>`;

                listItems.appendChild(li);
            });

        });

}

export default showData;
export { showDataRequireWorks }