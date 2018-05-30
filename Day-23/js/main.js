$(window).scroll(function () {
    var scrollDivPosition = $('#menu').position();
    var windowposition = $(window).scrollTop();
    if(windowposition >= scrollDivPosition.top) {
        $('#menuTwo').css({
            'position': 'fixed',
            'top': '0px',
            'width': '79%'
        });
    }else{
            $('#menuTwo').css({
                'position' : 'relative',
                'top' : '0px',
                'width': '100%'
            });
        }
});





$('#firstName').keyup(function () {
    var firstName = $('#firstName').val();


    var reg =  /^[a-zA-Z ]{2,10}$/;
    if( reg.test(firstName)){

        $('#firstNameError').text(' ');
    }else{
        $('#firstNameError').text('Only Charecter')
    }
});


