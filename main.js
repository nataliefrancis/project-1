console.log("ready");

let position = 0, quiz, quiz_status, question, plyrChoice, choices, ansA, ansB, ansC, correct;
let playerOne = 0;
let playerTwo = 0;

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

function getId(x) {
	return document.getElementById(x);
};

function renderQ() {
	quiz = getId('quiz');
	if (position >= 4) {
		playerOne = correct;
		quiz.innerHTML = "You got " +correct+ " right!<br> Now it's player two's turn"; 
		correct = 0; //this part not working properly//
	};

	question = questions[position][0];
	ansA = questions[position][1];
	ansB = questions[position][2];
	ansC = questions[position][3];
	quiz.innerHTML = "<h3>" +question+ "</h3>";
	quiz.innerHTML += "<input type='radio' name='choices' value='A'>" +ansA+ "<br>";
	quiz.innerHTML += "<input type='radio' name='choices' value='B'>" +ansB+ "<br>";
	quiz.innerHTML += "<input type='radio' name='choices' value='C'>" +ansC+ "<br>";
	quiz.innerHTML += "<button onclick=checkAnswer()>Next</button>";
};

function checkAnswer() {
	choices = document.getElementsByName('choices');
	for(let i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			plyrChoice = choices[i].value;
		}
		if (plyrChoice == questions[position][4]) {
			correct++;
		}
		position++;
		renderQ();
	}
};

window.addEventListener("load", renderQ(), false);