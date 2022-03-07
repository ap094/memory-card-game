import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { GameProvider } from "context/GameContext";
import App from "./App";
import "assets/scss/index.scss";

ReactDOM.render(
	<StrictMode>
		<GameProvider>
			<App />
		</GameProvider>
	</StrictMode>,
	document.getElementById("root"),
);
