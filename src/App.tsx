import Board from "./components/Board";

function App() {
	return (
		<main>
			<section>
				<h1>Memory Card Game</h1>
				<div>
					<p>Moves</p>
				</div>
			</section>
			<section>
				<Board />
			</section>
		</main>
	);
}

export default App;
