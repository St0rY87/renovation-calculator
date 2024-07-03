import { getResource } from "../services/services";
import checkUser from "../helpers/checkUser";


const form = () => {
  
     const form = document.querySelector('.popup-admin__form');

    if(form) {
        form.addEventListener('submit', (e)=> {
            e.preventDefault();
            getResource('http://localhost:3000/users')
            .then(res => checkUser(res, form));
        });
    }
    
};

export default form;