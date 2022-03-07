import { Actions } from "components/Actions";
import { Board } from "components/Board";
import { Results } from "components/Results";

function App() {
	return (
		<main>
			<h1>Memory Card Game</h1>
			<Actions />
			<Board />
			<Results />
		</main>
	);
}

export default App;
