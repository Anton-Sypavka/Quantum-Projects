document.addEventListener('DOMContentLoaded', function () {
    /**
     * @desc Function that makes dropdown nav menu active/disabled.
     **/

    const navBarBtn = document.querySelector('.nav__bars-button');

    navBarBtn.addEventListener('click', navBarOpen)

    function navBarOpen () {
        const navList = document.querySelector('.nav__list');
        const navBarIcon = document.querySelector('#nav__bars-icon')

        navList.classList.toggle('active');
        navBarIcon.classList.toggle('fa-bars')
        navBarIcon.classList.toggle('fa-times');
    };

    /**
     * @desc Function that changes slides in a slider.
     **/

    const sliderButton = document.querySelector('.slider-buttons-wrapper');
    sliderButton.addEventListener('click', changeSlides);
    let index = 1;

    function changeSlides(event) {
        if (event.target.classList.contains('slider-buttons-wrapper')) return;

        document.querySelectorAll('.slide-content').forEach( item => {
            item.classList.remove('active-slide');
            item.removeChild(document.querySelector('.slide-number'));
        })

        if (event.target.classList.contains('left') || event.target.classList.contains('fa-chevron-left')) {
            if (index === 1) index = document.querySelectorAll('.slide-content').length + 1;
            index--;
            document.querySelector('.slide-content[data-item="' + index + '"]').classList.add('active-slide');
        } else if (event.target.classList.contains('right') || event.target.classList.contains('fa-chevron-right')) {
            if (index === document.querySelectorAll('.slide-content').length) index = 0;
            index++;
            document.querySelector('.slide-content[data-item="' + index + '"]').classList.add('active-slide');
        }

        addItemNumber();
    }

    /**
     * @desc Function that adds order number to the current slide.
     **/

    function addItemNumber() {
        const slideContent = document.querySelectorAll('.slide-content');

        slideContent.forEach(item => {
            const p = document.createElement('p');
            p.classList.add('slide-number');
            p.innerHTML = `0${index} / 0${document.querySelectorAll('.slide-content').length}`;
            item.append(p);
            console.log(index)
        })
    }

    addItemNumber();

    // /**
    //  * @desc Function that adds order number to the current slide.
    //  **/

    const questionList = document.querySelector('.questions-list');
    questionList.addEventListener('click', openQuestionTab);

    function openQuestionTab(event) {
        event.preventDefault();
        const {target} = event;

        if (target.classList.contains('fa-plus') || target.classList.contains('fa-times')) {
            const parent = event.target.closest('.questions-list__item');
            parent.lastElementChild.classList.toggle('visible');

            target.classList.toggle('fa-plus');
            target.classList.toggle('fa-times');
        }
    }


    // const email = document.querySelector('.input-email');
    // const name = document.querySelector('.input-name');
    //
    // const namePattern = /[A-Za-z]/;
    // const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    //
    //
    // name.addEventListener('change', function (value) {
    //     if (name.value.match(namePattern)) {
    //         console.log('Good!')
    //         name.classList.add('valid')
    //     } else {
    //         console.log('Bad')
    //     }
    // });
    //
    // email.addEventListener('keydown', function (value) {
    //     if (email.value.match(emailPattern)) {
    //         email.classList.add('valid')
    //         console.log('Good!')
    //     } else {
    //         console.log('Bad')
    //     }
    // });
    //
    //
    //
    //




})


function validateName(value) {
    const nameError = document.querySelector('.name-error');
    const namePattern = /[A-Za-z]/;

    !value.match(namePattern)
        ? nameError.innerHTML = 'incorrect'
        : nameError.innerHTML = ''
}

function validateEmail(value) {
    const emailError = document.querySelector('.email-error');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    !value.match(emailPattern)
        ? emailError.innerHTML = 'incorrect'
        : emailError.innerHTML = ''
}

function submitButtonEnabled () {
    const name = document.querySelector('.input-name').value
    const email = document.querySelector('.input-email').value
    const submitButton = document.querySelector('.submit-button')
    const namePattern = /[A-Za-z]/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name.match(namePattern) && email.match(emailPattern)) {
        submitButton.removeAttribute('disabled');
    }
}



