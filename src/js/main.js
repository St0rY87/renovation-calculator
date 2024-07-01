'use strict'

// import handleInput from "./helpers/handleInput"
// import { showDataRequireWorks } from "./helpers/handleData"
import tabs from "./modules/tabs";
import showData from "./helpers/handleData";
import handleButton from "./helpers/modal";

window.addEventListener('DOMContentLoaded', () => {

    tabs();
    handleButton();
    modal();
})