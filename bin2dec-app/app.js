const form = document.querySelector('#num-input');
const convertFrom = document.querySelector('#unit1');
const convertTo = document.querySelector('#unit2');
const inputNum = document.querySelector('#input-number');
const outputNum = document.querySelector('#output-number');
const labelFrom = document.querySelector('#convertFrom');
const labelTo = document.querySelector('#convertTo');

convertFrom.addEventListener('change', function(){
    console.log(labelFrom.textContent);
    if(convertFrom.value === 'Binary') {
        labelFrom.textContent = 'Enter binary number';
    }else if(convertFrom.value === 'Decimal') {
        labelFrom.textContent = 'Enter decimal number';
    }else if(convertFrom.value === 'Hex') {
        labelFrom.textContent = 'Enter hex number';
    }
});

convertTo.addEventListener('change', function(){
    if(convertTo.value === 'Binary') {
        labelTo.textContent = 'Binary number';
    }else if(convertTo.value === 'Decimal') {
        labelTo.textContent = 'Decimal number';
    }else if(convertTo.value === 'Hex') {
        labelTo.textContent = 'Hex number';
    }
});

form.addEventListener('reset', function(e) {
    e.preventDefault();
    convertFrom.value = 'Binary';
    convertTo.value = 'Decimal'
    inputNum.value = '';
    outputNum.value = '';
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    outputNum.value = convertNumber();
});

const convertNumber = function() {
    if(convertFrom.value == 'Binary' && convertTo.value == 'Decimal') {
        return parseInt(inputNum.value, 2);
    } else if (convertFrom.value == 'Decimal' && convertTo.value == 'Binary') {
        return Number(inputNum.value).toString(2);
    } else if (convertFrom.value == 'Binary' && convertTo.value == 'Hex') {
        return parseInt(inputNum.value, 2).toString(16);
    } else if (convertFrom.value == 'Decimal' && convertTo.value == 'Hex') {
        return Number(inputNum.value).toString(16);
    } else if (convertFrom.value == 'Hex' && convertTo.value == 'Decimal') {
        return parseInt(inputNum.value, 16);
    } else if (convertFrom.value == 'Hex' && convertTo.value == 'Binary') {
        return parseInt(inputNum.value, 16).toString(2);
    } 
    return 999;
};


const convertDecimal2Binary = function() {

};

// Example: '101010' = 0*2^0 + 1*2^1 + 0*2^2 + 1*2^3 + 0*2^4 + 1*2^5 = 42
// 1978 = 8*10^0 + 7*10^1 + 9*10^2 + 1*10^3
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
// 2A = 10*16^0 + 2*16^1

const convertBinary2Decimal = function() {
    let num = 0;
    let exp = 0;
    let binStr = binNum.value;


};