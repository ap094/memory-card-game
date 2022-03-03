import Board from "./components/Board";

function App() {
    var moves = 1;

    return (
        <main>
            <section>
                <h1>Memory Card Game</h1>
                <div>
                    <p>Moves: 0</p>
                </div>
            </section>
            <section>
                <Board />
            </section>
        </main>
    );
}

export default App;
