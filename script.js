$(document).ready(function(){
	$("#solve_button").hover(function(){
		$(this).css("border-color", "red");
		}, function(){
		$(this).css("border-color", "#33CC33");
	});
	$("#solve_button").click(function() {
		$(".solution").css("visibility", "visible").hide().fadeIn(1500);
	});
});
function solve() {
    var a = parseInt(document.getElementById("one").value);
    var b = parseInt(document.getElementById("two").value);
    var c = parseInt(document.getElementById("three").value);
    var d = parseInt(document.getElementById("four").value);
    var step_one = c + (-1 * d);
    var step_two = -1 * b;
    var step_three = b * b;
    var step_four = 4 * a * step_one;
    var step_five = step_three - step_four;
    var step_six = Math.sqrt(step_five);
    var step_seven = 2 * a;
    var step_eight = step_two + step_six;
    var step_nine = step_eight / step_seven;
    var step_ten = step_two - step_six;
    var step_eleven = step_ten / step_seven;
    var round_one = step_nine.toFixed(2)
    var round_two = step_eleven.toFixed(2)
    if (step_three > step_four) {
	document.getElementById("line_one").innerHTML = "You have asked for a solution to: " + a + "x<sup>2</sup> + " + b +"x + " + c + " = " + d;
    document.getElementById("line_two").innerHTML = "Here you go!";
    document.getElementById("line_three").innerHTML = "x = " + round_one;
    document.getElementById("line_four").innerHTML = "or";
    document.getElementById("line_five").innerHTML = "x = " + round_two;
	}
	else if (step_three == step_four) {
		if (step_three == 0) {
			document.getElementById("line_two").innerHTML = "You have asked for a solution to: " + a + "x<sup>2</sup> + " + b +"x + " + c + " = " + d;
			document.getElementById("line_four").innerHTML = "This quadratic equation has no real solutions.";
		}
		else {
		    document.getElementById("line_one").innerHTML = "You have asked for a solution to: " + a + "x<sup>2</sup> + " + b +"x + " + c + " = " + d;
			document.getElementById("line_two").innerHTML = "Here you go!";
			document.getElementById("line_four").innerHTML = "x = " + round_one;
		}
	}
	else {
		document.getElementById("line_two").innerHTML = "You have asked for a solution to: " + a + "x<sup>2</sup> + " + b +"x + " + c + " = " + d;
		document.getElementById("line_four").innerHTML = "This quadratic equation has no real solutions.";
	}
}
