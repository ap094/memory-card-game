import { Actions } from "components/Actions";
import { Board } from "components/Board";
import { Results } from "components/Results";
import "./App.scss";

function App() {
	return (
		<main className="mainContainer">
			<h1>Memory Card Game</h1>
			<Actions />
			<Board />
			<Results />
		</main>
	);
}

export default App;
