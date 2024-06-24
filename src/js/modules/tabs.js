
const tabs = () => {
    const tabs = document.querySelectorAll('.calculator__tab'),
        tabsContent = document.querySelectorAll('.calculator__wrapper'),
        tabsParent = document.querySelector('.calculator__wrapper-tabs');

    const hideTabContent = () => {
        tabs.forEach(tab => tab.classList.remove('calculator__tab_active'));
        tabsContent.forEach(tabContent => tabContent.classList.add('none'));
    }


    const showTabContent = (i = 0) => {
        tabs[i].classList.add('calculator__tab_active');
        tabsContent[i].classList.remove('none');
    }
    hideTabContent();
    showTabContent();



    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('calculator__tab')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }

    })


}

export default tabs;