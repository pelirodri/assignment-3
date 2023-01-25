import { playRoundAgainstComputer } from "./rock-paper-scissors.js";
import MatchResult from "./MatchResult.js";

function reportPartialResult(result) {
	if (result !== MatchResult.draw) {
		alert(`You ${result === MatchResult.victory ? "won!" : "lost:("}`);
		console.log(`User ${result === MatchResult.victory ? "won" : "lost"}`);
	} else {
		alert("Match ended in a draw.");
		console.log("Draw");
	}
}

function formatPluralizableWord(word, quantity) {
	return `${word}${quantity > 1 ? "s" : ""}`;
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

function play(roundsCount) {
	const resultsHistory = [];

	for (let round = 1; round <= roundsCount; round++) {
		const result = playRoundAgainstComputer();

		reportPartialResult(result);
		resultsHistory.push(result);
	}

	return resultsHistory;
}

export function playForNumberOfRounds(roundsCount = 5) {
	reportFinalResults(play(roundsCount));
}
