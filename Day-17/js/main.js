var addElement = document.getElementById('add');
addElement.onclick = function () {
    document.getElementById('operator').value = '+';
}
var subElement = document.getElementById('sub');
subElement.onclick = function () {
    document.getElementById('operator').value = '-';
}

var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var operator =document.getElementById('operator').value;
    var res =myCalculator(operator);
    document.getElementById('res').value=res;
}



function myCalculator(operator) {
    var firstInput = Number(document.getElementById('firstNumber').value);
    var lastInput = Number(document.getElementById('lastNumber').value);
    switch (operator){
        case '+':
            var result = firstInput + lastInput;
            break;
        case '-':
            var result = firstInput - lastInput;
            break;
        case '*':
            var result = firstInput * lastInput;
            break;
        case '/':
            var result = firstInput / lastInput;
            break;
        case '%':
            var result = firstInput % lastInput;
            break;
    }
    return result;
}
var addElement = document.getElementById('add');
addElement.onclick = function () {
    myCalculator('+');
    document.getElementById('output').value=myCalculator('+');
};

var subElement = document.getElementById('sub');
subElement.onclick = function () {
    myCalculator('-');
    document.getElementById('output').value=myCalculator('-');
};

var mulElement = document.getElementById('mul');
mulElement.onclick = function () {
    myCalculator('*');
    document.getElementById('output').value=myCalculator('*');
};
var divElement = document.getElementById('div');
divElement.onclick = function () {
    myCalculator('/');
    document.getElementById('output').value=myCalculator('/');
};
var modElement = document.getElementById('mod');
modElement.onclick = function () {
    myCalculator('%');
    document.getElementById('output').value=myCalculator('%');
}










































// var addElement = document.getElementById('add');
//     addElement.onclick = function () {
//         var firstInput = Number(document.getElementById('firstNumber').value);
//         var lastInput = Number(document.getElementById('lastNumber').value);
//         var output = firstInput + lastInput;
//         document.getElementById('output').value=output;
// };
//     var subElement = document.getElementById('sub');
//     subElement.onclick = function () {
//     var firstInput = Number(document.getElementById('firstNumber').value)
//     /*alert(typeof (firstInput));*/
//     var lastInput = Number(document.getElementById('lastNumber').value);
//     var output = firstInput - lastInput;
//     document.getElementById('output').value=output;
// };
//     var mulElement = document.getElementById('mul');
//     mulElement.onclick = function () {
//     var firstInput = Number(document.getElementById('firstNumber').value)
//     /*alert(typeof (firstInput));*/
//     var lastInput = Number(document.getElementById('lastNumber').value);
//     var output = firstInput * lastInput;
//     document.getElementById('output').value=output;
// };
//     var divElement = document.getElementById('div');
//     divElement.onclick = function () {
//     var firstInput = Number(document.getElementById('firstNumber').value)
//     /*alert(typeof (firstInput));*/
//     var lastInput = Number(document.getElementById('lastNumber').value);
//     var output = firstInput / lastInput;
//     document.getElementById('output').value=output;
// };
//     var modElement = document.getElementById('mod');
//     modElement.onclick = function () {
//     var firstInput = Number(document.getElementById('firstNumber').value)
//     /*alert(typeof (firstInput));*/
//     var lastInput = Number(document.getElementById('lastNumber').value);
//     var output = firstInput % lastInput;
//     document.getElementById('output').value=output;
// };