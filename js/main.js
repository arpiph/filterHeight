$('#red').click(function() {
    $('.f_green').removeClass('maxHeight');
    $('.f_red').removeClass('maxHeight');

    $('.f_red').addClass('minHeight');
});


$('#green').click(function() {
    $('.f_red').removeClass('maxHeight');
    $('.f_green').addClass('minHeight');

});






$('#all').click(function() {

    $('.f_red').addClass('maxHeight');
    $('.f_green').addClass('maxHeight');
    $('.f_red').removeClass('minHeight');
    $('.f_green').removeClass('minHeight');



});
