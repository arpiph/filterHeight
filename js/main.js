$('#red').click(function() {


    $('.f_red').addClass('minHeight').removeClass('maxHeight');

    $('.f_green').removeClass('maxHeight');
});


$('#green').click(function() {
    $('.f_red').removeClass('maxHeight');
    $('.f_green').removeClass('maxHeight').addClass('minHeight');


});






$('#all').click(function() {

    $('.f_red').addClass('maxHeight');
    $('.f_green').addClass('maxHeight');
    $('.f_red').removeClass('minHeight');
    $('.f_green').removeClass('minHeight');



});
