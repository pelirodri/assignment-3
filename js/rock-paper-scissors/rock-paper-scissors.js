import RockPaperScissorsMove from "./RockPaperScissorsMove.js";
import RockPaperScissorsMoves from "./RockPaperScissorsMoves.js";

export function generateRandomMove() {
	const allMoves = [RockPaperScissorsMoves.rock, RockPaperScissorsMoves.paper, RockPaperScissorsMoves.scissors];
	return allMoves[Math.floor(Math.random() * allMoves.length)];
}

export function getMoveFromName(moveName) {
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
