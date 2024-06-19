import ReactDOM from "react-dom/client";
import "./../src/styles/global.scss";
import App from "./index";
import "./pages/home/cards/cards";
import "./pages/home/gameBoard/gameBoard";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
