$(".fate").click(function() {
  $(".fate").hide();
  
});

$(".flip1").click(function() {
 $(".tiles").hide();
  $(".life1").show();
});

document.getElementById("fate").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("fate").innerHTML = "YOU CLICKED ME!";
}