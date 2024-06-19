import React from "react";
import GameBoard from "./pages/home/gameBoard/gameBoard";
import "./pages/home/gameBoard/gameBoard.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <GameBoard />
    </div>
  );
};

export default App;
