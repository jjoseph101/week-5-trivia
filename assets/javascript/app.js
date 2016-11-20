// javascript file

// for variable, have question, answer, correct/incorrect objects
// when start is clicked replace "main" with question/answers and start timer
// for loop with append for each set of question answsers
// when timer stops or player clicks done, determine correct/incorrect
// determine value 
// display results


//global variables
var questionsAnswers = {
	"qAs": [
		{
		question: "Question 1",
		answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
		correctChoice: 3
		},
		{
		question: "Question 2",
		answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
		correctChoice: 2
		},
		{
		question: "Question 3",
		answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
		correctChoice: 1
		},
		{
		question: "Question 4",
		answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
		correctChoice: 2
		},
		{
		question: "Question 5",
		answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
		correctChoice: 0
		},
	]
};	

// upon start button click event...
$(".start").on('click', function() {
	console.log("clicked");  //test if worked
	
	//start timer for 90 seconds
	$("#timeLeft").html("<h2>Time Remaining: 90 seconds</h2>");
	var timer = {
		time: 100, //starting time
		start: function () {  //function to start count
			setInterval(timer.count, 1000);
		},
		count: function () { //actual counting function
			console.log("count running");
			timer.time--;
			if (timer.time>-1) {
				$("#timeLeft").html("<h2>Time Remaining: "+ timer.time + " seconds</h2>");

			} else {
				$("#timeLeft").html("<h2>Time Remaining: OUT OF TIME!!!</h2><BR>");
				$("#timeLeft").append("<h3>Answered Correctly:</h3><BR>");
				$("#timeLeft").append("<h3>Answered Incorrectly:</h3><BR>");
				$("#timeLeft").append("<h3>Not Answered At All:</h3><BR>");
				return;
			};
		},
	};

	// function to populate dom with questions/answers
	function displayQs () {
		for (i = 0; i < questionsAnswers.qAs.length; i++) {
			console.log("for loop worked " + i);  //test to see if worked
			$(".main").append("<BR>"+questionsAnswers.qAs[i].question+"<BR><BR>"); //add question
			for (j=0; j < 4; j++) { //add answers as radio buttons
				console.log("logging i "+i)
				$(".main").append("<div class='radio'><label><input type='radio' name='optionsRadios' id='optionRadios"+[j+1]+" value='"+[j+1]+"'>"+				questionsAnswers.qAs[i].answers[j]+"</label></div>");  
			}
		}
	};

	//start timer
	timer.start ();

	//display questions header
	$(".main").html("<BR><h1>10 Questions:</h1><BR>");
	
	//run function to display questions/answers 
	displayQs ();


	// var currentTime = timer ();

	// //display and test timer
	// console.log(timer());
	// $("#timeLeft").html("<h2>Time Remaining: "+ currentTime +"</h2>");
	// 



});


