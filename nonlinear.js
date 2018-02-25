$(".hide").click(function() {
  $(".hide").hide(); 
});

$(".alert").click(function() {
    alert("BOO!"); 
});

$(".color").click(function() {
    $( this ).css( "background-color", "red" );
});

var audio = new Audio('lollipop.mp3');
$(".sound").click(function() {
  audio.play();
  
});