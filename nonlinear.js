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


$(".idk").click(function(){
    $('background-color').toggle();
});

$(".fade").click(function(){
     $(".fade").fadeTo(1000, 0.4);
});


