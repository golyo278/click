$(".hide").click(function() {
  $(".hide").hide(); 
});

$(".alert").click(function() {
    alert("BOO!"); 
});

$(".color").click(function() {
    $( this ).css( "background-color", "red" );
});


var audio = new Audio('Bandrew.m4a');
$(".sound").click(function() {
  audio.play();
  
});


$(".animate").click(function(){
    $(".animate").animate({right: '250px'});
}); 

$(".fade").click(function(){
    $(".fade").fadeIn("slow");
});

$(".slide").click(function(){
    slideDown();
});
