
const tabs = () => {
    const tabs = document.querySelectorAll('.calculator__tab'),
        tabsContent = document.querySelectorAll('.calculator__wrapper'),
        tabsParent = document.querySelector('.calculator__wrapper-tabs');


    try {
        const hideTabContent = () => {
            tabs.forEach(tab => {
                tab.classList.remove('calculator__tab_active');
            });

            tabsContent.forEach(tabContent => {
                tabContent.classList.remove('fadeIn');
                tabContent.classList.add('none');
            });
        }

        const showTabContent = (i = 0) => {
            tabsContent[i].classList.remove('none');
            tabsContent[i].classList.add('fade-in');
            tabs[i].classList.add('calculator__tab_active');
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
                });
            }
        })
    } catch (error) {
    }
}

export default tabs;