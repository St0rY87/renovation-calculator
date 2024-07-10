import { getResource } from '../services/services';
import handleInput, { handleRequireWorksInputs } from './handleInput';
import { handleInputSquare } from './handleInput';
import { getCeilingHeight } from './handleInput';
import { handleRequireWorks } from './handleInput';
import { checkService } from './handleInput';

const showData = (selectorListItems, selectorOverlay, ref, classes, showValue, showPlaceholder, markupTemplate, ...variables) => {
    const listItems = document.querySelector(selectorListItems),
        overlay = document.querySelector(selectorOverlay);
    if (overlay) {
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
                    li.classList.add(...classes);
                    li.id = selectedVariables.id;
                    li.innerHTML = markupTemplate(selectedVariables);
                    if (showValue) {
                        li.querySelector('.calculator__item-input').value = item.value;
                    }
                    if (showPlaceholder) {
                        li.querySelector('.calculator__item-input').placeholder = item.value;
                    }
                    listItems.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Error fetching data');
            })
    }

}
showData('.calculator__content_repair-cost',
    '.overlay.overlay_repair-cost',
    'http://localhost:3000/operations',
    ['calculator__item', 'calculator__item_repair-cost'],
    null,
    true,
    (selectedVariable) =>
        ` <label class="calculator__item-text calculator__item-text_repair-cost">
            ${selectedVariable.name}
                <div class="calculator__item-inner calculator__item-inner_repair-cost">
                    <input type="text" class="calculator__item-input" placeholder="0.0">
                    <span class="calculator__item-symb">${selectedVariable.unit}</span>
                </div>
        </label>`,
    'id', 'value', 'unit', 'name'
)

showData('.calculator__content_square',
    '.overlay.overlay_square',
    'http://localhost:3000/squares',
    ['calculator__item'],
    true,
    null,
    (selectedVariable) => `
        <label class="calculator__item-text">
        <span>${selectedVariable.name}:</span>
            <div class="calculator__item-inner">
            <input class="calculator__item-input" type="text" placeholder="0.0" data-type="${selectedVariable.type}" >
        <span class="calculator__item-symb">м2</span>
            </div>
        </label>`,

    'id', 'name', 'value', 'type'
)

showData('.calculator__content_require-works',
    '.overlay.overlay_require-works',
    'http://localhost:3000/operations',
    ['calculator__item'],
    null,
    null,
    (selectedVariable) => `
                           <label class="calculator__item-text calculator__item-text_require-works">
                                            <p>${selectedVariable.name}
                                                <span
                                                    class=" accent calculator__item-accent calculator__item-accent_require-works ">
                                                    ${selectedVariable.value}/${selectedVariable.unit}</span>
                                            </p>
                                            <div class="calculator__item-inner  calculator__item-inner_require-works ">
                                                <input type="checkbox" class="checkbox dismantling" name="dismantling" data-type=${selectedVariable.type}>
                                            </div>
                                        </label>
                                    `,

    'id', 'name', 'value', 'unit', 'type'
)


const state = {
    squares: {},
    services: []
};
setTimeout(() => { handleInput(state) }, 2000);
handleInputSquare(state);
getCeilingHeight(state);
handleRequireWorksInputs(state);

export default showData;