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
    $('.idk').toggle();
});

$(".animate").click(function(){
    $(".animate").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'});
});


$(".fade").click(function(){
     $(".fade").fadeTo(1000, 0.4);
});


