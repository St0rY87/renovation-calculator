'use strict'

// import handleInput from "./helpers/handleInput"
// import { showDataRequireWorks } from "./helpers/handleData"
import tabs from "./modules/tabs";
import showData from "./helpers/handleData";
import handleButton from "./helpers/modal";
import openModal from "./helpers/modal";
import form from "./modules/form";
window.addEventListener('DOMContentLoaded', () => {

    tabs();
    handleButton();
    openModal();
    form();
})