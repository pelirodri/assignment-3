import { getMoveFromName, generateRandomMove } from "./rock-paper-scissors/rock-paper-scissors.js";
import MatchResult from "./rock-paper-scissors/MatchResult.js";

function reportPartialResult(result, round) {
	if (result !== MatchResult.draw) {
		alert(`Round ${round} result:\n\nYou ${result === MatchResult.victory ? "won!" : "lost:("}`);
		console.log(`User ${result === MatchResult.victory ? "won" : "lost"}`);
	} else {
		alert(`Round ${round} ended in a draw.`);
		console.log("Draw");
	}
}

function formatPluralizableWord(word, quantity) {
	return `${word}${quantity > 1 || quantity === 0 ? "s" : ""}`;
}

function reportFinalResults(results) {
	const wonCount = results.filter(result => result === MatchResult.victory).length;
	const lostCount = results.filter(result => result === MatchResult.defeat).length;

	let overallResult = MatchResult.draw;

	if (wonCount > lostCount) {
		overallResult = MatchResult.victory;
	} else if (wonCount < lostCount) {
		overallResult = MatchResult.defeat;
	}

	alert(
		`You won ${wonCount} ${formatPluralizableWord("round", wonCount)} and lost` +
		` ${lostCount} ${formatPluralizableWord("round", lostCount)} out of a total of ${results.length}` +
		`, resulting in ${overallResult === MatchResult.draw ? "a " : ""}${overallResult.description}.`
	);

	console.log(`Game ended in ${overallResult === MatchResult.draw ? "a " : ""}${overallResult.description}`);
}

function playRoundAgainstComputer() {
	const userInput = prompt("Choose your move from rock, paper, or scissors");

	if (userInput && userInput.length > 0) {
		try {
			const userMove = getMoveFromName(userInput.trim().toLowerCase());
			return userMove.checkResultAgainst(generateRandomMove());
		} catch {
			console.error("Invalid move detected");
		}
	}

	alert("Please enter a valid move");

	playRoundAgainstComputer();
}


function play(roundsCount) {
	const resultsHistory = [];

	for (let round = 1; round <= roundsCount; round++) {
		const result = playRoundAgainstComputer();

		reportPartialResult(result, round);
		resultsHistory.push(result);
	}

	return resultsHistory;
}

export function playForNumberOfRounds(roundsCount = 5) {
	alert(`You’re about to play ${roundsCount} rounds of rock paper scissors!`);
	reportFinalResults(play(roundsCount));
}
