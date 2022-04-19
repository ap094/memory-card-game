import { StrictMode } from "react";
import { Main } from "components/Main";
import { GameProvider } from "context/GameContext";

function App() {
	return (
		<StrictMode>
			<GameProvider>
				<Main />
			</GameProvider>
		</StrictMode>
	);
}

export default App;
