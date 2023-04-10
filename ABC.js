$('.title').on('click', function() {
    var findElm = $(this).next(".box");
    $(findElm).slideToggle();

//    if($(this).hasClass('close')){
//        $(this).removeClass('close');
//    }else{
//        $(this).addClass('close');
//    }
});

//$(window).on('load', function(){
//    $(".open").each(function(index, element){
//        var Title =$(element).children('.title');
//        $(Title).addClass('close');
//        var Box =$(element).children('.box');
//        $(Box).slideDown(500);
//    });
//});

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

window.onload = async function() {
    const loading_img = document.getElementById("loading");
    await delay(0.85);
    loading_img.classList.add('loaded');
}
