
// hide button
	 $('.hidebtn').click (function () {
	$("#part1").css("display","none")
});

// end

// Show
$('.showbtn').click (function () {
	$("#part1").css("display","block");
});
// end

// change HTML Content
	$('.changecontent').click (function () {
	$('#content').html('Tuitt is cool');
});

// end
// height change
	$('.imageheight').click (function () {
	$("#image1").css("height","50px");
});
// end
// change image
	$('.changeimage').click (function () {
	$("#image1").attr("src","assets/images/image2.png")
});

// end

// change style
	$('.changestylebtn').click (function () {
	$("#changestyle").css("color","red");
	$("#changestyle").css("backgroundColor","black");
});

// end
	$('#computebutton').click (function () {
		let x =	$('#num1').val();
		let y =	$('#num2').val();
		let z = parseInt(x) + parseInt(y);
		$('#sum').html(z);
	
});


