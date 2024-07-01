import { getResource } from '../services/services';
import handleInput from './handleInput';

const showData = (selectorListItems, selectorOverlay, ref, markupTemplate, ...variables) => {
    const listItems = document.querySelector(selectorListItems),
        overlay = document.querySelector(selectorOverlay);
    overlay.classList.remove('none');
    getResource(ref)
        .then(res => {
            overlay.classList.add('none');
            res.forEach(item => {

                const selectedVariables = {};
                variables.forEach(variable => {
                    selectedVariables[variable] = item[variable];
                })
                const li = document.createElement('LI');
                li.classList.add('calculator__item');
                li.id = selectedVariables.id;
                li.innerHTML = markupTemplate(selectedVariables);

                listItems.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data');
        })
}

showData('.calculator__content_square',
    '.overlay',
    'http://localhost:3000/squares',

    (selectedVariable) => `
        <label class="calculator__item-text">
        <span>${selectedVariable.name}:</span>
            <div class="calculator__item-inner">
            <input class="calculator__item-input" type="text" placeholder="0.0">
        <span class="calculator__item-symb">м2</span>
            </div>
        </label>`,

    'id', 'name'
)

showData('.calculator__content_require-works',
    '.overlay.overlay_require-works',
    'http://localhost:3000/operations',

    (selectedVariable) => `
                           <label class="calculator__item-text calculator__item-text_require-works">
                                            <p>${selectedVariable.name}
                                                <span
                                                    class=" accent calculator__item-accent calculator__item-accent_require-works ">
                                                    ${selectedVariable.count}/${selectedVariable.unit}</span>
                                            </p>
                                            <div class="calculator__item-inner  calculator__item-inner_require-works ">
                                                <input type="checkbox" class="checkbox dismantling" name="dismantling">
                                            </div>
                                        </label>
                                    `,

    'id', 'name', 'count', 'unit'
)
setTimeout(() => { handleInput() }, 2000)
export default showData;