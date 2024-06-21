import React from "react";
import GameBoard from "./pages/home/gameBoard/index";
import "./pages/home/gameBoard/styles.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <GameBoard />
    </div>
  );
};

export default App;
