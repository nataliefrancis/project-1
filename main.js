console.log("ready");

let position = 0, quiz, quiz_status, question, plyrChoice, choices, ansA, ansB, ansC;
var correct = 0
let playerOne = 0; //Player one score
let playerTwo = 0; //Player two score
let turn = 0 //This is used to notify when it is player 2's turn

///////////// QUESTIONS AND ANSWERS //////////////////
let questions = [
	["Who was the original killer in 'Friday the 13th'?", "Jason Voorhees", "Alice", "Mrs. Voorhees", "C"],
	["What was Leatherface's weapon of choice?", "Chainsaw", "Knife", "Axe", "A"],
	["The movie 'When a Stranger Calls' is based on which urban legend?", "Someone hiding in your backseat", "The babysitter and the stranger upstairs", "The kidney thief", "B"],
	["In the movie 'Carrie', how does Carrie kill her mother?", "Knifes her", "Burns her", "Shoots her", "A"],
	["In 'Nightmare on Elm Street', what colors are on Freddy Krueger's sweater?", "Red and black", "Black and gold", "Red and green", "C"],
	["What zombie movie is this quote from: 'You are like a giant cock-blocking robot, like, developed in a secret fucking government lab.'", "Shaun of the Dead", "Zombieland", "Evil Dead", "B"],
	["In which Stephen King movie do the characters battle a clown named Pennywise?", "Carrie", "Tommyknockers", "It", "C"],
	["What horror movie featured a gourmet cannibal?", "Silence of the Lambs", "Friday the 13th", "Texas Chainsaw Massacre", "A"],
];

// function getId(x) {
// 	return document.getElementById(x);
// };

/////////////// QUESTION GENERATOR ////////////////////
function renderQ() {
	quiz = document.getElementById('quiz'); //#quiz div
	if(turn == 5) {
			turn++;
			playerOne = correct
			alert("It is player two's turn now"); //switch players
	}
	question = questions[position][0];
	ansA = questions[position][1];
	ansB = questions[position][2];
	ansC = questions[position][3];
	quiz.innerHTML = "<h3>" +question+ "</h3>";
	quiz.innerHTML += "<input type='radio' name='choices' class='choice' value='A'>" +ansA+ "<br>";
	quiz.innerHTML += "<input type='radio' name='choices' class='choice' value='B'>" +ansB+ "<br>";
	quiz.innerHTML += "<input type='radio' name='choices' class='choice' value='C'>" +ansC+ "<br>";
	quiz.innerHTML += "<button class='next-button' onclick=checkAnswer()>Next</button>";
};

/////////////// Checks to see if the answer is correct and adds to their score ////////
function checkAnswer() {
	choices = document.getElementsByName('choices');
	for(let i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			plyrChoice = choices[i].value; //stores the value of their choice
		}
	};
	if (plyrChoice == questions[position][4]) { //Compares the value of their choice to the correct answer
		correct++; //Stores a point for what they got right
	};
	turn++ //logs how many questions have been asked
	position= Math.floor((Math.random() * 7) + 0); //randomizes the question number
	renderQ();
};

window.addEventListener("load", renderQ(), false);