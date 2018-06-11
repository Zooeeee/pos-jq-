$(document).ready(function(){
let a = $('.add').val();
$('.add').click(function(){
    //$("h2").siblings("p");
    let a = $(this).siblings(".text_box").val();
    a = parseInt(a);
    $(this).siblings(".text_box").val(a+1)
});
$('.min').click(function(){
    if($(this).siblings(".text_box").val()>0){
    let a = $(this).siblings(".text_box").val();
    a = parseInt(a);
    $(this).siblings(".text_box").val(a-1);
    }
    else{alert("数量为0了！！！")}
})







})