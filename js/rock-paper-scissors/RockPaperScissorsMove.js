export default class RockPaperScissorsMove {
	static Names = {
		rock: Symbol("rock"),
		paper: Symbol("paper"),
		scissors: Symbol("scissors")
	};

	name = "";

	constructor() {
		if (this.constructor === RockPaperScissorsMove) {
			throw new Error("Cannot instantiate this class");
		}
	}

	checkResultAgainst(move) {
		throw new Error("Cannot call this method on this object");
	}
}
