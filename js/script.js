/**
 * @desc Function that makes dropdown nav menu active/disabled.
 **/

const navBarBtn = document.querySelector('.nav__bars-button');

navBarBtn.addEventListener('click', navBarOpen)

function navBarOpen() {
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

    document.querySelectorAll('.slide-content').forEach(item => {
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

/**
 * @desc Function that opens specific window with text.
 **/

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

/**
 * @desc Function for checking the input of name and email address.
 **/


function validateForm(value) {
    const form = document.querySelectorAll('.validating-input');

    const name = document.querySelector('.input-name').value;
    const nameError = document.querySelector('.name-error');

    const email = document.querySelector('.input-email').value;
    const emailError = document.querySelector('.email-error');

    const submitButton = document.querySelector('.submit-button');
    const namePattern = /[A-Za-z]/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    form.forEach(item => {
        if (item.classList.contains('input-name')) {
            if (item.value !== '' && !item.value.match(namePattern)) {
                nameError.innerHTML = 'Incorrect name type';
                item.classList.remove('valid');
                item.classList.add('invalid');
            } else if (item.value.match(namePattern)){
                nameError.innerHTML = '';
                item.classList.remove('invalid');
                item.classList.add('valid');
            }
        } else if (item.classList.contains('input-email')) {
            if (item.value !== '' && !item.value.match(emailPattern)) {
                emailError.innerHTML = 'Incorrect email type';
                item.classList.remove('valid');
                item.classList.add('invalid');
            } else if (item.value.match(emailPattern)) {
                emailError.innerHTML = '';
                item.classList.remove('invalid');
                item.classList.add('valid');
            }
        }
    });

    if (name.match(namePattern) && email.match(emailPattern)) {
        submitButton.removeAttribute('disabled');
    }
}



