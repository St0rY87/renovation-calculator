const checkUser = (item, form) => {
    item.forEach(user => {
        const login = form.login.value,
            password = form.password.value;
        if (user.login === login && user.password === password) {
            window.location.href = '/repair-cost.html';
        }
    });
};

export default checkUser;