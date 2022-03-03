import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { GameProvider } from "./context/GameContext";
import App from "./App";
import "./index.scss";

ReactDOM.render(
	<StrictMode>
		<GameProvider>
			<App />
		</GameProvider>
	</StrictMode>,
	document.getElementById("root"),
);
