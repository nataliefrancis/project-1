console.log("ready");

let count = 19 //Used for the randomizing positions, it's the count of the # of questions available in questions array
let position = Math.floor((Math.random() * count) + 0); //Used for the index of the current question
let placeholder = quiz, question, plyrChoice, choices, ansA, ansB, ansC;
let correct = 0;
let playerOne = 0; //Player one score
let playerTwo = 0; //Player two score
let turn = 0; //This is used to notify when it is player 2's turn

quiz = document.getElementById('quiz'); //#quiz div

///////////// QUESTIONS AND ANSWERS //////////////////
let questions = [
	["Who was the original killer in 'Friday the 13th'?", "Jason Voorhees", "Alice", "Mrs. Voorhees", "C"],
	["What was Leatherface's weapon of choice?", "Chainsaw", "Knife", "Axe", "A"],
	["The movie 'When a Stranger Calls' is based on which urban legend?", "Someone hiding in your backseat", "The babysitter and the stranger upstairs", "The kidney thief", "B"],
	["In the movie 'Carrie', how does Carrie kill her mother?", "Stabs her", "Burns her", "Shoots her", "A"],
	["In 'Nightmare on Elm Street', what colors are on Freddy Krueger's sweater?", "Red and black", "Black and gold", "Red and green", "C"],
	["What zombie movie is this quote from: 'You are like a giant cock-blocking robot, like, developed in a secret fucking government lab.'?", "Shaun of the Dead", "Zombieland", "Evil Dead", "B"],
	["In which Stephen King movie do the characters battle a clown named Pennywise?", "Carrie", "Tommyknockers", "It", "C"],
	["What horror movie featured a gourmet cannibal?", "Silence of the Lambs", "Friday the 13th", "Texas Chainsaw Massacre", "A"],
	["What is the name of the motel in 'Psycho'?", "Crave Inn", "Bates Motel", "Bel Air Motel", "B"],
	["What is the name of the hotel in 'The Shining'?", "The Overlook", "The Majestic", "The Lenox", "A"],
	["'The Ring' was based on a 1998 horror movie from which country?", "Ireland", "Indonesia", "Japan", "C"],
	["Kevin Williamson was inspired to write 'Scream' after watching a documentary about which real-life serial killer?", "Ted Bundy", "The Gainsville Ripper", "Charles Manson", "B"],
	["What horror movie features a serial killer wearing a mask inspired by an Edvard Munch painting?", "Halloween", "Texas Chainsaw Massacre", "Scream", "C"],
	["How many times do you have to say 'Candyman' in the mirror before he appears?", "2", "3", "4", "B"],
	["What famous villian stalks children in their dreams?", "Freddy Kreuger", "Jason Vorhees", "Leatherface", "A"],
	["Who was the psycho in the movie Halloween?", "Freddy Kreuger", "Jason Vorhees", "Michael Myers", "C"],
	["In 'The Exorcist', what was the little girl's name?", "Sara", "Regan", "Katherine", "B"],
	["In the film 'The Others', what were the children allergic to?", "Sunlight", "Milk", "Dust", "A"],
	["What city did the newlyweds go to in 'Shutter'?", "Beijing", "Bangkok", "Tokyo", "C"],
	["In the movie 'Final Destination', where were the students aboard Flight 180 headed to?", "Germany", "France", "England", "B"],
];

/////////////// QUESTION GENERATOR ////////////////////
function renderQ() {
	if(turn == 5) {
			turn++;
			playerOne = correct;    //Logs the score for player one
			quiz.innerHTML = "<h2>Player one, you got " +playerOne+ " correct!<br>Now it's Player Two's turn...</h2>"; //switch players
			quiz.innerHTML += "<button class='play2' onclick=checkAnswer()>Go!</button>";
			return false;
	}
	if(turn == 11) {              //Once each player answers 5 questions, it checks for winner
		playerTwo = correct - playerOne;
		checkWinner();
		return false;
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
			plyrChoice = choices[i].value;             //stores the value of their choice
		}
	};
	if (plyrChoice == questions[position][4]) {   //Compares the value of their choice to the correct answer
		correct++;             //Stores a point for what they got right
	};
	questions.splice(position, 1); //Erases the question so that there are no repeats
	turn++;            //logs how many questions have been asked
	count--;
	position=Math.floor((Math.random() * count) + 0);   //This changes the question #
	renderQ();
};


////////////// Checks for a winner by comparing the scores ///////////////////
function checkWinner() {
	if(playerOne > playerTwo) {
		quiz.innerHTML = "<h2>Player One wins $1,000,000!!!</h2>";
		quiz.innerHTML += "<button class='next-button' onclick=restart()>Play again</button>";
	} else if(playerOne < playerTwo) {
		quiz.innerHTML = "<h2>Player Two wins $1,000,000!!!</h2>";
		quiz.innerHTML += "<button class='next-button' onclick=restart()>Play again</button>";
	} else {
		quiz.innerHTML = "<h2>You tied!</h2>";
		quiz.innerHTML += "<button class='next-button' onclick=restart()>Play again</button>";
	}
};

///////// Restarts the game //////////////
function restart() {
	correct = 0;
	playerOne = 0;
	playerTwo = 0;
	turn = 0;
	position= Math.floor((Math.random() * 19) + 0);
	renderQ();
};

///////////// Search button at the bottom of page ///////////
function search() {
    window.open("http://www.imdb.com/");
};

window.addEventListener("load", renderQ(), false);