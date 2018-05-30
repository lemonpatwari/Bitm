var image =['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg',];
var index = 0;
function changeimage() {
    var mainImage=document.getElementById('mainImage');
    mainImage.setAttribute('src',image[index]);
    index++;
    if(index>=image.length){
        index=0;
    }
};
setInterval(changeimage,2000);




var firstImage =document.getElementById('img1');
firstImage.onclick=function () {
    var srcAttributeimagr = document.getElementById('img1').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',srcAttributeimagr);

};

var secondImage =document.getElementById('img2');
secondImage.onclick=function () {
    var srcAttributeimagr = document.getElementById('img2').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',srcAttributeimagr);
};

var thirdImage =document.getElementById('img3');
thirdImage.onclick=function () {
    var srcAttributeimagr = document.getElementById('img3').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',srcAttributeimagr);
};

var fourImage =document.getElementById('img4');
fourImage.onclick=function () {
    var srcAttributeimagr = document.getElementById('img4').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',srcAttributeimagr);
};
