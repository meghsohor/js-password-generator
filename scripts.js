const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFn = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', generatePassword);
function generatePassword(e) {
    const length = +lengthEl.value;
    const upper = uppercaseEl.checked;
    const lower = lowercaseEl.checked;
    const number = numbersEl.checked;
    const symbol = symbolsEl.checked;
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(type => Object.values(type)[0]);
    let password = '';
    if(typesCount == 0) {
        return resultEl.innerText = '';
    }
    for(let i = 0; i < length; i++) {
        const randomNumber = typesArr[Math.floor(Math.random() * typesArr.length)];
        password += randomFn[Object.keys(randomNumber)[0]]();
    }
    console.log(password);
    resultEl.innerText = password;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[(Math.floor(Math.random() * symbols.length))];
}