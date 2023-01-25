import { playForNumberOfRounds } from "./rock-paper-scissors/game.js";

function play() {
	// Pass an argument with the number of rounds; defaults to 5
	playForNumberOfRounds();

	if (confirm("Wanna go again?")) {
		play();
	}
}

window.onload = () => {
	play();
};
