const addUserLocalStorage = (name, isActiveUser) => {
    const usersLS = localStorage.getItem('users');
    let users = [];
    if (!usersLS) {
        users.push({ name: name, isActiveUser: isActiveUser });
    }
    else {
        users = JSON.parse(usersLS);
        const checkName = users.some(user => user.name === name);
        if (!checkName) {
            users.push({ name: name, isActiveUser: isActiveUser });
        }
    }
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

export default addUserLocalStorage;
export { checkUserInLocalStorage };