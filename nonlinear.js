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