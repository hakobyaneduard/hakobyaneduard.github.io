(function () {
    var contactPopup = document.querySelector('.contact-popup');
    var headerContactBtn = document.querySelector('.header-contact__btn');
    var contactPopupHeaderBtn = document.querySelector('.contact-popup__header-btn');
    var clickCounter = 0;

    contactPopupHeaderBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        contactPopup.classList.remove('active');
        contactPopupFormList.classList.remove('active');
        contactPopupFormTelBtn.removeEventListener('click', addEventPreventDefault);
        contactPopupFormTelBtn.removeEventListener('click', callTellNumber);
    });

    headerContactBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        contactPopup.classList.add('active');
        contactPopupFormTelBtn.addEventListener('click', addEventPreventDefault);
        contactPopupFormTelBtn.addEventListener('click', callTellNumber);
    });

    var contactPopupFormTelBtn = document.querySelector('.contact-popup__contact-form__tel');
    var contactPopupFormList = document.querySelector('.contact-popup__contact-form__list');

    function addEventPreventDefault (evtIn) {
        evtIn.preventDefault();
    }

    function callTellNumber () {
        contactPopupFormList.classList.add('active');
        clickCounter++;

        if (clickCounter >= 1) {
            contactPopupFormTelBtn.removeEventListener('click', addEventPreventDefault);
        }
    }

})();


