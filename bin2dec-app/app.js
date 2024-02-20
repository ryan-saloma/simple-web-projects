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
    if(binNum.value == '' && decNum.value == '') {
        alert('Please enter a binary string or decimal number.')
        return ['',''];
    } else if( binNum.value == '') {
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

const convertBinary2Decimal = function(binNum, decNum) {
    let num = 0;
    let binStr = binNum.value;

    return ['dec', binStr];
};