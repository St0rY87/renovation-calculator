const openModal = () => {
    const btn = document.querySelector('.calc_button'),
        modal = document.querySelector('.popup-admin');
    btn.addEventListener('click', () => {
        modal.classList.remove('none')
        document.body.style.overflow = 'hidden';
    })
}

export default openModal;