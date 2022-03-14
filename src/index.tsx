import { StrictMode } from "react";
import { render } from "react-dom";
import { GameProvider } from "context/GameContext";
import App from "./App";
import "assets/scss/index.scss";

render(
	<StrictMode>
		<GameProvider>
			<App />
		</GameProvider>
	</StrictMode>,
	document.getElementById("root"),
);
