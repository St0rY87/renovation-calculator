'use strict'

import tabs from "./modules/tabs";
import showData from "./helpers/handleData";
import openModal from "./modules/modal";
import form from "./modules/form";
import repairCostPage from "./modules/repairCostPage";
window.addEventListener('DOMContentLoaded', () => {
    tabs();
    openModal();
    form();
    repairCostPage();
})