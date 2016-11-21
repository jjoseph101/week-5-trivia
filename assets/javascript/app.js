// javascript file

//global variables
var correctAs = 0;
var incorrectAs = 0;
var skippedQs = 0;
var questionsAnswers = {
	"qAs": [
		{//question1
		question: "What year was the first personal computer called 'Simon' sold?",
		answers: ["1920", "1934", "1944", "1950"],
		correctChoice: 3
		},
		{//question2
		question: "What was Seagate Technology originally named?",
		answers: ["DamnWay Technnology", "Ocean Company", "Shugart Technology", "Samgate Technology"],
		correctChoice: 2
		},
		{//question3
		question: "What was MicroSoft Windows originally named?",
		answers: ["Panes", "Interface Manager", "XT", "GUISys"],
		correctChoice: 1
		},
		{//question4
		question: "How big were the diameter of floppy disks in the late 1970's?",
		answers: ["3 inches", "5 inches", "8 inches", "11 inches"],
		correctChoice: 2
		},
		{//question5
		question: "What year did Commodore sell the VIC-20 computer?",
		answers: ["1980", "1982", "1985", "1994"],
		correctChoice: 0
		},
		{//question6
		question: "What did SanDisk used to be called?",
		answers: ["SanFly", "GeoSys", "Databytes", "SunDisk"],
		correctChoice: 3
		},
		{//question7
		question: "What was Adobe Photoshop originally called?",
		answers: ["ImageSafe", "ColorMyPics", "Display", "Draw"],
		correctChoice: 2
		},
		{//question8
		question: "What was Dell, Inc., originally called?",
		answers: ["ATX", "PCs Limited", "Expo Computers", "Mike's"],
		correctChoice: 1
		},
		{//question9
		question: "What does IBM's 'Lenova' mean?",
		answers: ["new man", "brand strong", "new legend", "out with the old"],
		correctChoice: 2
		},
		{//question10
		question: "How were computers commonly referred to in the 1950's?",
		answers: ["electronic brains", "digitizers", "beep boxes", "power frames"],
		correctChoice: 0
		},
	]
};	

// upon start button click event...
$(".start").on('click', function() {

	//start timer for 90 seconds
	$("#timeLeft").html("<h2>Time Remaining: 90 seconds</h2>");
	var timer = {
		time: 90, //starting time
		start: function () {  //function to start count
				startCount = setInterval(timer.count, 1000);
		},
		stop: function () { //stop the counting
			clearInterval(startCount);
		},
		count: function () { //actual counting function
			timer.time--;
			if (timer.time>-1) { //countdown
				$("#timeLeft").html("<h2>Time Remaining: "+ timer.time + " seconds</h2>");
			
			//out of time
			} else if (timer.time=-1) {  
				$("#timeLeft").html("<h2>Time Remaining: OUT OF TIME!!!</h2><BR>");
				checkAnswers();  //check answers
				$("#timeLeft").append("<h3>Answered Correctly: "+correctAs+"</h3><BR>");
				$("#timeLeft").append("<h3>Answered Incorrectly: "+incorrectAs+"</h3><BR>");
				$("#timeLeft").append("<h3>Not Answered At All: "+skippedQs+"</h3><BR>");
				timer.stop ();  //stop timer
				$(".main").empty();  //clear old questions
			} else {};
		},
	};

	// function to populate dom with questions/answers
	function displayQs () {
		for (i = 0; i < questionsAnswers.qAs.length; i++) {
			$(".main").append("<div class='form-group'>");
			$(".main").append("<BR>"+[i+1]+". "+questionsAnswers.qAs[i].question+"<BR><BR>"); //add question
			$(".main").append("<div class='col-lg-10 answers'>");
			displayAs ();
			$(".main").append("</div>");
			$(".main").append("</div>");
		}
	};

	//function to display answer choices
	function displayAs () {
		for (j=0; j < 4; j++) { //add answers as radio buttons
		$(".main").append("<div class='radio'><label><input type='radio' name='optionsRadios"+[i]+"' id='optionRadios"+[j+1]+"' value='"+[j+1]+"'>"+				questionsAnswers.qAs[i].answers[j]+"</label></div>");  
			};
	};

	//function to check answers
	function checkAnswers () {
		var len = questionsAnswers.qAs.length;
		for (k=0; k<len; k++) {
			var ansIndex=$('input[name=optionsRadios'+k+']:checked').val();
			var ansComp=questionsAnswers.qAs[k].correctChoice
			if (ansIndex==ansComp+1) {
				correctAs++;
			} else if (ansIndex!=ansComp+1 && ansIndex!=null) {
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
});


