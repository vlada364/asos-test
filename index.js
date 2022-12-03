let inputEmail = document.getElementById('email_address');
let tooltipEmail = document.getElementById('tooltip')
//проверка емейла
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const FIRST_NAME_REGEXP = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/
const LAST_NAME_REGEXP = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/
const PASSWORD_REGEXP = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/


inputEmail.addEventListener('input', onInput)

function onInput() {

    if (!isEmailValid(inputEmail.value)) {
        inputEmail.style.borderColor = 'red';
        tooltipEmail.style.visibility = 'visible'
        tooltipEmail.innerHTML = `<p>Email fail! Please type in your correct email address</p>`


    } else {
        inputEmail.style.borderColor = 'green';
        tooltipEmail.style.visibility = 'hidden'
    }
}


function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}


//проверка имени и фамилии

let inputFirstName = document.getElementById('first_name');
let tooltipName = document.getElementById('tooltip_name');
let inputLastName = document.getElementById('last_name');
let tooltipLastName = document.getElementById('tooltip_last_name');

inputFirstName.addEventListener('input', onInputName)

function onInputName() {
    if (inputFirstName.value === '') {
        inputFirstName.style.borderColor = 'red';
        tooltipName.style.visibility = 'visible'
        tooltipName.innerHTML = `<p>We need your first name – it’s nicer that way</p>`
    }
    if (!isValidName(inputFirstName.value)) {
        inputFirstName.style.borderColor = 'red';
        tooltipName.style.visibility = 'visible'
        tooltipName.innerHTML = `<p>First name must not contain <, >, &, " or .</p>`


    } else {
        inputFirstName.style.borderColor = 'green';
        tooltipName.style.visibility = 'hidden'

    }
}


function isValidName(value) {
    return FIRST_NAME_REGEXP.test(value)

}

inputLastName.addEventListener('input', onInputLastName)


function onInputLastName() {
    if (!isValidLastName(inputLastName.value)) {
        inputLastName.style.borderColor = 'red';
        tooltipLastName.style.visibility = 'visible'
        tooltipLastName.innerHTML = `<p>First name must not contain <, >, &, " or .</p>`
    } else {
        inputLastName.style.borderColor = 'green';
        tooltipLastName.style.visibility = 'hidden'
    }

}

function isValidLastName(value) {
    return LAST_NAME_REGEXP.test(value)
}

let inputPassword = document.getElementById('password');
let tooltipPassword = document.getElementById('tooltip_password');

inputPassword.addEventListener('input', oninputPassword)

function oninputPassword() {
    if (!isValidPassword(inputPassword.value)) {
        inputPassword.style.borderColor = 'red';
        tooltipPassword.style.visibility = 'visible'
        tooltipPassword.innerHTML = `<p>Erm, you need 10 or more characters</p>`
    } else {
        inputPassword.style.borderColor = 'green';
        tooltipPassword.style.visibility = 'hidden'
    }
}

function isValidPassword(value) {
    return PASSWORD_REGEXP.test(value)
}

//проверка всех инпутов

let form = document.getElementById('form')
let joinAsosBtn = document.getElementById('btn-asos')
joinAsosBtn.addEventListener('click', checkAllInputs)

function checkAllInputs() {
    let formInputs = Array.from(form.querySelectorAll('.form_input'))
    let inputsValueTrue=formInputs.every((input)=>input.value)
    if(inputsValueTrue){
        console.log('Да')
    }else{
        console.log('Нет')
    }
}


let btnSelect = document.querySelector('.select_all_btn');

btnSelect.addEventListener('click', checkboxAll)
let checkbox = document.querySelectorAll('.checkbox-input');
let checkInputSelect = document.getElementById('input_select')
checkInputSelect.addEventListener('change', changeCheckBox)


function changeCheckBox(e) {
    let select

    if (e.target.tagName === 'INPUT' && e.target.checked) {
        select = true

    } else {
        select = false

    }
    countSelect(select)
}

function checkboxAll() {
    // ЕСЛИ КАКАЯ-ТО ГАЛОЧКА НАЖАТА, ТО ФУНКЦИЯ БУДЕТ СТАВИТЬ false на checked; Если ничего не нажато, то оно у всех проставит true
    const isSomethingSet = [...checkbox].every(el => el.checked);
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = !isSomethingSet;
    }
    if (!isSomethingSet) {
        btnSelect.innerText = 'CLEAR ALL'
    }
    if (isSomethingSet) {
        btnSelect.innerText = 'SELECT ALL'
    }
}

let count = 0

function countSelect(select) {
    if (select === true) {
        count = count + 1
    } else {
        count = count - 1
    }
    changeBtnName(count)
}

function changeBtnName(count) {
    if (count === checkbox.length) {
        btnSelect.innerText = 'CLEAR ALL'
    } else {
        btnSelect.innerText = 'SELECT ALL'
    }
}

var handleChange = () => {
    const date = getBirthDate();
    if (date) {
        let dateCorr = checkDate(selectYear.value, month.indexOf(selectMonth.value) + 1, selectDate.value)
        correctDate(dateCorr)
        let trueAge = getAge()
        correctAge(trueAge)

    }
}

function correctAge(age) {
    if (age <= 17) {
        alert('Вы слишком малы')
    }
}

function correctDate(date) {
    if (!date) {
        alert('Неправильная дата')
    }
}

let selectDate = document.querySelector('#day')
selectDate.addEventListener('click', showDay);
let selectMonth = document.querySelector('#month')
selectMonth.addEventListener('click', showMonth)
let selectYear = document.querySelector('#year')
selectYear.addEventListener('click', showYear)
selectMonth.addEventListener('change', handleChange);
selectYear.addEventListener('change', handleChange);

selectDate.addEventListener('change', handleChange);

let date = new Date()
let year = date.getFullYear() - 16

let today = new Date(date.getFullYear(), date.getMonth(), date.getDate())

const getAge = () => {
    return (today.getFullYear() - giveBirth().getFullYear())
}
const giveBirth = () => {
    return new Date(selectYear.value, month.indexOf(selectMonth.value) + 1, selectDate.value)
}
const getBirthDate = () => {
    if (selectYear.value !== '0' && selectMonth.value !== '0' && selectDate.value !== '0') {
        return [selectDate.value, month.indexOf(selectMonth.value), Number(selectYear.value)]
    }
    return null;
}

const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]

function showDay(e) {
    if (e.currentTarget.children.length === 1) {
        for (let i = 1; i <= 31; i++) {
            let option = document.createElement('option');
            option.innerText += i
            option.value = i
            selectDate.appendChild(option)
        }
    }
}

function showMonth(e) {
    if (e.currentTarget.children.length === 1) {
        for (let i = 0; i < 12; i++) {
            let optionMonth = document.createElement('option')
            optionMonth.innerText = month[i]
            selectMonth.appendChild(optionMonth)
        }
    }
}

function showYear(e) {
    if (e.currentTarget.children.length === 1) {
        for (let i = year; i >= 1900; i--) {
            let optionYear = document.createElement('option')
            optionYear.innerText += i
            selectYear.appendChild(optionYear)
        }
    }
}


function checkDate(year, month, day) {
    let date = new Date(year, month - 1, day)
    return date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day
}

