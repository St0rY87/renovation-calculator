'use strict'

import handleInput from "./helpers/handleInput"
import tabs from "./modules/tabs";
import showData from "./helpers/showData";

window.addEventListener('DOMContentLoaded', () => {
    handleInput();
    tabs();
    showData();

})