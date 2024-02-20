const form = document.querySelector('#num-input');
const binNum = document.querySelector('#bin-num');
const decNum = document.querySelector('#dec-num');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    [type, str] =  convertNumber(binNum, decNum);
    if(type == 'bin')  {

    } else if(type == 'dec') {

    } 
});

const convertNumber = function(binNum, decNum) {
    let binNumEmpty = binNum.value == '';
    let decNumEmpty = decNum.value == '';
    if(binNumEmpty && decNumEmpty) {
        alert('Please enter a binary string or decimal number.')
        return ['',''];
    } else if(binNumEmpty) {
        return convertDecimal2Binary(binNum, decNum);
    } else {
        return convertBinary2Decimal();
    }

};


const convertDecimal2Binary = function(binNum, decNum) {
    let num = decNum.value;
    let binStr = '';

    return ['bin', binStr];
};

// Example: '101010' = 0*2^0 + 1*2^1 + 0*2^2 + 1*2^3 + 0*2^4 + 1*2^5 = 42

const convertBinary2Decimal = function(binNum, decNum) {
    let num = 0;
    let binStr = binNum.value;

    return ['dec', binStr];
};