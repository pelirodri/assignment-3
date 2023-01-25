import RockPaperScissorsMove from "./RockPaperScissorsMove.js";
import MatchResult from "./MatchResult.js";

class RockMove extends RockPaperScissorsMove {
	constructor() {
		super();
		this.name = RockPaperScissorsMove.Names.rock.description;
	}

	checkResultAgainst(move) {
		switch (move) {
			case RockPaperScissorsMoves.rock:
				return MatchResult.draw;
			case RockPaperScissorsMoves.paper:
				return MatchResult.defeat;
			case RockPaperScissorsMoves.scissors:
				return MatchResult.victory;
		}
	}
}

class PaperMove extends RockPaperScissorsMove {
	constructor() {
		super();
		this.name = RockPaperScissorsMove.Names.paper.description;
	}

	checkResultAgainst(move) {
		switch (move) {
			case RockPaperScissorsMoves.rock:
				return MatchResult.victory;
			case RockPaperScissorsMoves.paper:
				return MatchResult.draw;
			case RockPaperScissorsMoves.scissors:
				return MatchResult.defeat;
		}
	}
}

class ScissorsMove extends RockPaperScissorsMove {
	constructor() {		
		super();
		this.name = RockPaperScissorsMove.Names.scissors.description;
	}

	checkResultAgainst(move) {
		switch (move) {
			case RockPaperScissorsMoves.rock:
				return MatchResult.defeat;
			case RockPaperScissorsMoves.paper:
				return MatchResult.victory;
			case RockPaperScissorsMoves.scissors:
				return MatchResult.draw;
		}
	}
}

export default class RockPaperScissorsMoves {
	static rock = new RockMove();
	static paper = new PaperMove();
	static scissors = new ScissorsMove();
}
