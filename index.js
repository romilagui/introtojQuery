// _______________________ Aula 1 __________________________
//alert("working");
//$("h1").css("color", "green");
//console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));

// $("h1").addClass("big-title margin-50");
// $("button");

// _________________________ Aula 3 _________________________
//console.log($("img").attr("src"));
//$("a").attr("href", "https://www.yahoo.com");

// _________________________ Aula 4 _________________________
// Adding Event Listeners with jQuery
// $("h1").click(function(){
//   $("h1").css("color", "purple");
// })

// Clicking on the buttons make the color change
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   })
// }

// Changing the color by clicking on the buttons with jQuery
// $("button").click(function( ){
//   $("h1").css("color", "purple");
// })
// You don't have to use a for loop


// // Key press event listener
// $("input").keypress(function(event) {
//   $("h1").text(event.key);
// });

// // Another way of adding event listeners
// // Using on
// $("h1").on("mouseover", function() {
//   $("h1").css("color", "purple");
// })

// ______________________ Aula 5 ________________________
$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
})


