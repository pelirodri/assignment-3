import RockPaperScissorsMove from "./RockPaperScissorsMove.js";
import RockPaperScissorsMoves from "./RockPaperScissorsMoves.js";

function generateRandomMove() {
	const allMoves = [RockPaperScissorsMoves.rock, RockPaperScissorsMoves.paper, RockPaperScissorsMoves.scissors];
	return allMoves[Math.floor(Math.random() * allMoves.length)];
}

function getMoveFromName(moveName) {
	switch (moveName) {
		case RockPaperScissorsMove.Names.rock.description:
			return RockPaperScissorsMoves.rock;
		case RockPaperScissorsMove.Names.paper.description:
			return RockPaperScissorsMoves.paper;
		case RockPaperScissorsMove.Names.scissors.description:
			return RockPaperScissorsMoves.scissors;
		default:
			throw new TypeError("Invalid move name");
	}
}

export function playRoundAgainstComputer() {
	const userInput = prompt("Choose your move from rock, paper, or scissors");

	if (userInput && userInput.length > 0) {		
		try {
			const userMove = getMoveFromName(userInput.trim().toLowerCase());
			return userMove.checkResultAgainst(generateRandomMove());
		} catch {
			console.error("Invalid move detected");
		}
	}

	playRoundAgainstComputer();
}
