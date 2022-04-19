import { createRoot } from "react-dom/client";
import App from "./App";
import "assets/scss/index.scss";

const appContainer = document.getElementById("app");
const root = createRoot(appContainer!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
root.render(<App />);
