 var red =document.getElementById('redButton');
red.onclick=function () {
    var divOne = document.getElementById('boxOne');
    divOne.className='class-one'
    // divOne.style.backgroundColor = 'red';

};
var green =document.getElementById('greenButton');
 green.onclick=function () {
    var divOne= document.getElementById('boxOne');
    divOne.style.backgroundColor='green'
};
var blue =document.getElementById('blueButton');
 blue.onclick=function () {
    var divOne= document.getElementById('boxOne');
    divOne.style.backgroundColor='blue'
};
var yellow =document.getElementById('yellowButton');
 yellow.onclick=function () {
    var divOne= document.getElementById('boxOne');
    divOne.style.backgroundColor='yellow'
};
var defualt =document.getElementById('defultButton');
 defualt.onclick=function () {
    var divOne= document.getElementById('boxOne');
    divOne.style.backgroundColor='white'
};














var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var fName = document.getElementById('firstNumber').value;
    var  lName= document.getElementById('lastNumber').value;

    var res ='';
    for (var i=fName; i<=lName; i++){
        res +=i +' ';
    }
    document.getElementById('output').innerHTML = res;
};