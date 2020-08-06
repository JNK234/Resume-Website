// $(document).ready(function(){
// 	$(".skillbar").each(function(){
// 		$(this).find(".skillbar-bar").animate({
// 			width:$(this).attr("data-width")
// 		},2000);
// 	});
// });


	// $('.skillbar').each(function(){
	// 	$(this).find('.skillbar-bar').animate(
	// 		{width:$(this).attr('data-width')},6000);
	// });

//
$("#My-skills").ready(function(){
  $(".skillbar").each(function(){
    $(this).find(".skillbar-bar").animate({
      width:$(this).attr("data-width")
    },5000);
  });
});

// $(document).ready(function(){
// 	$(".skillbar").each(function(){
// 		$(this).find(".skillbar-bar").animate({
// 			width:$(this).attr("data-width")
// 		},200);
// 	});
// });


// function move() {
//   var elem = document.getElementById("myBar");
//   var width = 1;
//   var id = setInterval(frame, 50);
//   function frame() {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//     }
//   }
// }
//
//
// $(document).ready(move());
