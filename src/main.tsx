import ReactDOM from "react-dom/client";
import "./../src/styles/global.scss";
import App from "./index";
import "./pages/home/cards";
import "./pages/home/gameBoard";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
