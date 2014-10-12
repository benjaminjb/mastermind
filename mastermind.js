var App = (function() {
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

	var startGame = function(numberofPegs,numberofAttempts) {
		var solution = chooseSolution(numberofPegs);
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
		var solution = "";
		var colorsArray = Object.keys(colors);
		for (var i = 0; i < numberofPegs; i++) {
			numberColor = Math.floor(Math.random() * colorsArray.length);
			solution += colorsArray[numberColor];
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

		while( solution.length > 0 && guess.length > 0 ) {  
	    if (solution[0] < guess[0] ){  solution.shift(); }
	    else if (solution[0] > guess[0] ){ guess.shift(); }
	    else {
	      correctCol++;
	      solution.shift();
	      guess.shift();
	    }
	  }
	  console.log([correctCol,correctPos]);
	  return [correctCol,correctPos];
	}

	return  {
		startGame: startGame
	}
})();