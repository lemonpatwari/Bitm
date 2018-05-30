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
