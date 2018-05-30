$('#heading').click(function () {
    $(this).css({
        'color' : '#fff',
        'font-size':'20px',
        'background':'#000',
    });
});


// var head = document.getElementById('heading');
// head.onclick = function () {
//     heading.style.color="red";
// };





// clock
function watch() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    document.getElementById('watch').innerHTML=hours + ":" +minutes + ":"+second;
}
setInterval(watch,1000);



// function demo() {
//     alert('Hellow Word!');
// };
//
// setInterval(demo,3000);


        // timing method

        // setInterval()
        // setTimeout()

