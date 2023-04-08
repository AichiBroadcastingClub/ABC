$('.title').on('click', function() {
    var findElm = $(this).next(".box");
    $(findElm).slideToggle();

    if($(this).hasClass('close')){
        $(this).removeClass('close');
    }else{
        $(this).addClass('close');
    }
});

$(window).on('load', function(){
    $(".open").each(function(index, element){
        var Title =$(element).children('.title');
        $(Title).addClass('close');
        var Box =$(element).children('.box');
        $(Box).slideDown(500);
    });
});