// javascript file

// for variable, have question, answer, correct/incorrect objects
// when start is clicked replace "main" with question/answers and start timer
// for loop with append for each set of question answsers
// when timer stops or player clicks done, determine correct/incorrect
// determine value 
// display results


//global variables
var correctAs = 0;
var incorrectAs = 0;
var skippedQs = 0;
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
		time: 10, //starting time
		start: function () {  //function to start count

				startCount = setInterval(timer.count, 1000);	

		},
		stop: function () {
			clearInterval(startCount);
		},
		count: function () { //actual counting function
			//console.log("count running");
			timer.time--;
			if (timer.time>-1) {
				$("#timeLeft").html("<h2>Time Remaining: "+ timer.time + " seconds</h2>");

			} else if (timer.time=-1) {
				$("#timeLeft").html("<h2>Time Remaining: OUT OF TIME!!!</h2><BR>");
				checkAnswers();
				$("#timeLeft").append("<h3>Answered Correctly: "+correctAs+"</h3><BR>");
				$("#timeLeft").append("<h3>Answered Incorrectly: "+incorrectAs+"</h3><BR>");
				$("#timeLeft").append("<h3>Not Answered At All: "+skippedQs+"</h3><BR>");
				timer.stop ();
				$(".main").empty();
				// return;
			} else {};
		},
	};

	// function to populate dom with questions/answers
	function displayQs () {
		for (i = 0; i < questionsAnswers.qAs.length; i++) {
			console.log("for loop worked " + i);  //test to see if worked
			$(".main").append("<div class='form-group'>");
			$(".main").append("<BR>"+questionsAnswers.qAs[i].question+"<BR><BR>"); //add question
			$(".main").append("<div class='col-lg-10 answers'>");
			displayAs ();
			$(".main").append("</div>");
			$(".main").append("</div>");
		}
	};

	function displayAs () {
		for (j=0; j < 4; j++) { //add answers as radio buttons
		console.log("logging i "+i)
		$(".main").append("<div class='radio'><label><input type='radio' name='optionsRadios"+[i]+"' id='optionRadios"+[j+1]+"' value='"+[j+1]+"'>"+				questionsAnswers.qAs[i].answers[j]+"</label></div>");  
			};
	};

	function checkAnswers () {

		var len = questionsAnswers.qAs.length;
		for (k=0; k<len; k++) {
			var ansIndex=$('input[name=optionsRadios'+k+']:checked').val();
			console.log("Answers made: "+ansIndex); //test
			var ansComp=questionsAnswers.qAs[k].correctChoice
			console.log("Correct Choices: "+ansComp) //test
			if (ansIndex==ansComp) {
				correctAs++;
			} else if (ansIndex!=ansComp && ansIndex!=null) {
				incorrectAs++;
			} else {
				skippedQs++;
			}
		};

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


