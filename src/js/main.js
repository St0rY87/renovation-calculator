'use strict'

import handleInput from "./helpers/handleInput"
import tabs from "./modules/tabs";
import showData from "./helpers/handleData";
import { showDataRequireWorks } from "./helpers/handleData"

window.addEventListener('DOMContentLoaded', () => {
    handleInput();
    tabs();
    showData();
    showDataRequireWorks();

})