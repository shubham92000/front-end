$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","li span",function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();

});

$('input[type="text"]').on("keypress",function(event){
    if(event.which === 13 ){
        var todotext = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todotext+"</li>");
    }
});

$(".fa-plus").on("click",function(){
    $('input[type="text"]').fadeToggle();
});