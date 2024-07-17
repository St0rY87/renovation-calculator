const addUserLocalStorage = (name, isActiveUser) => {
    localStorage.clear();
    let users = [];
    users.push({ name: name, isActiveUser: isActiveUser });

    localStorage.setItem('users', JSON.stringify(users));
}

const checkUserInLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    let isActiveUser = '';
    if (users) {
        isActiveUser = users.some(user => user.isActiveUser === true);
        if (isActiveUser) {
            return true
        }
        else {
            return false
        }
    }
}

const exitActiveUSerLocalStorage = () => {
    localStorage.clear();
}

export default addUserLocalStorage;
export { checkUserInLocalStorage };
export { exitActiveUSerLocalStorage };