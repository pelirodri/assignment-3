// Enum emulation, since we're not allowed to use TypeScript
export default class MatchResult {
	static victory = Symbol("victory");
	static defeat = Symbol("defeat");
	static draw = Symbol("draw");
}
