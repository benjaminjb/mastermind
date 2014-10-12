// setup
var colors = {
	u:'blue',
	b:'black',
	w:'white',
	r:'red',
	g:'green',
	y:'yellow'
};

var guessLog = "Guess\n";
var solution = ""

var startGame = function(numberofPegs,numberofAttempts) {
	solution = chooseSolution(numberofPegs);
	var solved = false;
	while (!solved) {
		var guess = prompt(guessLog);
		guessLog += ('\n' + guess);
		if (evaluateGuess(guess, solution).toString() == [0, numberofPegs].toString()) {
			solved = true;
			console.log('woo.');
		}
	}
};

var chooseSolution = function(numberofPegs) {
	colorsArray = Object.keys(colors);
	for (var i = 0; i < numberofPegs; i++) {
		numberColor = Math.floor(Math.random() * colorsArray.length);
		solution += colorsArray[numberColor];
		console.log(solution);
	}
	return solution;
};

var evaluateGuess = function(guess, solution) {
	var correctPos = 0;
	var correctCol = 0;
	for (var i = 0; i < solution.length; i++) {
		if (solution[i] == guess[i]) {
			correctPos++;
			solution = solution.replace(solution[i],'');
			guess = guess.replace(guess[i],'');
			i--;
		}
	}
	solution = solution.split('').sort();
	guess = guess.split('').sort();

	while( solution.length > 0 && guess.length > 0 )
	{  
    if (solution[0] < guess[0] ){ 
    	solution.shift(); 
    }
    else if (solution[0] > guess[0] ){ 
    	guess.shift(); 
    }
    else /* they're equal */
    {
      correctCol++;
      solution.shift();
      guess.shift();
    }
  }
  console.log([correctCol,correctPos]);
  return [correctCol,correctPos];
}

// console.log(evaluateGuess('ruru', 'ruru').toString() == [0,4].toString());
// console.log(evaluateGuess('brru', 'ruru').toString() == [1,2].toString());
// console.log(evaluateGuess('bugy', 'ruru').toString() == [0,1].toString());
// console.log(evaluateGuess('bbbb', 'ruru').toString() == [0,0].toString());
// console.log(evaluateGuess('rruy', 'ruru').toString() == [2,1].toString());

startGame(4, 0);