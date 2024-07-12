import calcTotalValue from "./calcTotalValue";
import { changeData } from "../services/services";
import { getResource } from "../services/services";
import calcSelectedService from "./calcSelectedService";
import customRound from "./customRound";
import displayTotalCost from "./showCurrency";
import { displayCurrency } from "./showCurrency";

const handleInput = (e) => {
    try {
        const target = e.target;
        if (target && target.tagName === 'INPUT') {
            let value = target.value;
            value = value.replace(/[^0-9-.]/g, '');

            if (value.length > 6) {
                value = value.slice(0, 6);
            }

            if ((value.match(/\./g) || []).length > 1) {
                value = value.slice(0, -1);
            }

            if (value.includes('.')) {
                const parts = value.split('.');
                if (parts[1].length > 1) {
                    parts[1] = parts[1].slice(0, 1);
                }
                value = parts.join('.');
            }

            if (value.length > 1 && value[0] === '0' && value[1] !== '.') {
                value = value.slice(1);
            }

            if (value.indexOf('-') !== -1) {
                const parts = value.split('-');
                value = '-' + parts.join('').replace(/-/g, '');
                target.classList.add('error-input');
            } else {
                target.classList.remove('error-input');
            }
            target.value = value;
        }
    } catch (error) {

    }
}

const checkMaxLengthInput = (selectorInputLogin, selectorInputs, classNameError, maxLengthInput, selectorErrorText) => {
    try {
        const inputs = document.querySelectorAll(selectorInputs),
            inputLogin = document.querySelector(selectorInputLogin),
            errorText = document.querySelector(selectorErrorText);
        if (inputLogin) {
            inputLogin.addEventListener('input', () => {
                if (inputLogin.value.length > maxLengthInput) {
                    inputs.forEach(input => input.classList.add(classNameError));
                    errorText.classList.remove('none');
                }
                else {
                    inputs.forEach(input => input.classList.remove(classNameError));
                    errorText.classList.add('none');
                }
            })
        }
    } catch (error) { }
}

const handleInputsRepairCost = () => {
    try {
        const list = document.querySelector('.calculator__content_repair-cost');
        if (list) {
            list.addEventListener('input', (e) => {
                handleInput(e);
            })
            list.addEventListener('change', (e) => {
                const target = e.target;
                if (target) {
                    const id = target.parentElement.parentElement.parentElement.id;
                    let value = target.value;
                    if (value < 0) {
                        value = 0;
                    }
                    changeData('http://localhost:3000/operations/', id, value)
                }
            })
        }
    } catch (error) { }
}

const handleInputSquare = (state) => {
    try {
        const list = document.querySelector('.calculator__content_square');
        if (list) {
            list.addEventListener('input', (e) => {
                handleInput(e);
                calcTotalValue(state, '[data-type="common"]', e);
                calcTotalValue(state, '[data-type="bathroom"]', e);
                checkService(state, ['surface', 'walls', 'plinth', 'doorsRoom', 'WindowSlopes', 'tile', 'additional'])
                displayTotalCost(state, '.calculator__amount');
                displayCurrency(state, '.calculator__amount-first_foreign')

                console.log(state)
            })
        }
    } catch (error) { }
}

const getCeilingHeight = (state) => {
    try {
        const parent = document.querySelector('.calculator__item-inner');
        if (parent) {
            parent.addEventListener('input', e => {
                calcTotalValue(state, '[data-type="ceiling"]', e);
                checkService(state, ['surface', 'walls', 'plinth', 'doorsRoom', 'WindowSlopes', 'tile', 'additional'])
                displayTotalCost(state, '.calculator__amount');
                displayCurrency(state, '.calculator__amount-first_foreign');
                console.log(state)
            })
        }
    } catch (error) { }
}

const handleRequireWorksInputs = (state) => {
    try {
        const list = document.querySelector('.calculator__content_require-works');
        state.results = {
        };
        if (list) {
            list.addEventListener('change', (e) => {
                const target = e.target;

                const id = target.parentElement.parentElement.parentElement.id;
                getResource(`http://localhost:3000/operations/${id}`)
                    .then(res => {
                        const { ceiling = 0, common = 0, bathroom = 0 } = state.squares;
                        const { name, value, type, id } = res;
                        const isChecked = target.checked;
                        const newArr = state.services.filter(item => item.id !== id);
                        state.services =
                            [...newArr,
                            {
                                name,
                                value,
                                type,
                                id,
                                isChecked
                            }
                            ]
                        if (target) {

                            switch (type) {
                                case 'surface':
                                    const sumSurface = calcSelectedService(state, 'surface');
                                    state.results.surface = sumSurface * (common + bathroom);
                                    break;

                                case 'walls':
                                    const sumWalls = calcSelectedService(state, 'walls');
                                    state.results.walls = parseInt(4 * Math.sqrt(common + bathroom) * ceiling * sumWalls);
                                    // console.log('formula walls')
                                    break;

                                case 'plinth':
                                    // console.log('formula plinth')
                                    const sumPLinth = calcSelectedService(state, 'plinth');
                                    state.results.plinth = parseInt(4 * Math.sqrt(common + bathroom) * sumPLinth);
                                    break;

                                case 'doorsRoom': //вставка входной двери
                                    // console.log('formula doorRooms')
                                    const sumAdd = calcSelectedService(state, 'doorsRoom');
                                    const doors = customRound((common + bathroom) / 25) * sumAdd;
                                    state.results.doorsRoom = doors;
                                    break;

                                case 'WindowSlopes':
                                    // console.log('formula WindowSlopes')
                                    const sumSlopes = calcSelectedService(state, 'WindowSlopes');
                                    const windows = customRound((common + bathroom) / 7.5) * sumSlopes;
                                    state.results.WindowSlopes = windows;
                                    break;

                                case 'tile':
                                    // console.log('formula tile')
                                    const sumTile = calcSelectedService(state, 'tile');
                                    state.results.tile = sumTile * bathroom;
                                    break;

                                case 'additional':
                                    // console.log('Changed additional')
                                    const sumAdditional = calcSelectedService(state, 'additional');
                                    state.results.additional = sumAdditional;
                                    break;
                            }
                            const total = Object.values(state.results).reduce((totalSum, item) => {
                                return totalSum + item
                            }, 0)
                            state.totalSum = total;
                            console.log(state)
                            displayTotalCost(state, '.calculator__amount');
                            displayCurrency(state, '.calculator__amount-first_foreign');
                        }
                    })
            })
        }
    } catch (error) { }
}

const checkService = (state, type = []) => {
    try {
        const { ceiling = 0, common = 0, bathroom = 0 } = state.squares;
        type.forEach(item => {
            switch (item) {
                case 'surface':
                    const sumSurface = calcSelectedService(state, 'surface');
                    state.results.surface = sumSurface * (common + bathroom);
                    break;
                case 'walls':
                    const sumWalls = calcSelectedService(state, 'walls');
                    state.results.walls = parseInt(4 * Math.sqrt(common + bathroom) * ceiling * sumWalls);
                    // console.log('formula walls')
                    break;
                case 'plinth':
                    // console.log('formula plinth')
                    const sumPLinth = calcSelectedService(state, 'plinth');
                    state.results.plinth = parseInt(4 * Math.sqrt(common + bathroom) * sumPLinth);
                    break;
                case 'doorsRoom': //вставка входной двери
                    // console.log('formula doorRooms')
                    const sumAdd = calcSelectedService(state, 'doorsRoom');
                    const doors = customRound((common + bathroom) / 25) * sumAdd;
                    // console.log(doors);
                    state.results.doorsRoom = doors;
                    break;
                case 'WindowSlopes':
                    // console.log('formula WindowSlopes')
                    const sumSlopes = calcSelectedService(state, 'WindowSlopes');
                    const windows = customRound((common + bathroom) / 7.5) * sumSlopes;
                    // console.log(windows);
                    state.results.WindowSlopes = windows;
                    break;
                case 'tile':
                    // console.log('formula tile')
                    const sumTile = calcSelectedService(state, 'tile');
                    state.results.tile = sumTile * bathroom;
                    break;

                case 'additional':
                    // console.log('Changed additional')
                    const sumAdditional = calcSelectedService(state, 'additional');
                    state.results.additional = sumAdditional;
                    break;
            }
        })
        const total = Object.values(state.results).reduce((totalSum, item) => {
            return totalSum + item
        }, 0)
        state.totalSum = total;
    } catch (error) {

    }
}


export default handleInput;
export { checkMaxLengthInput };
export { handleInputsRepairCost };
export { handleInputSquare };
export { getCeilingHeight };
export { handleRequireWorksInputs };
