import React, { useEffect, useState } from "react";
import { CardType } from "../../../models/cardModels";
import Card from "../cards";
import Modal from "../modal";
import initialCards from "../utils/initialCards";
import "./styles.scss";

const GameBoard: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [firstChoice, setFirstChoice] = useState<CardType | null>(null);
  const [secondChoice, setSecondChoice] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const handleChoice = (card: CardType) => {
    if (!disabled) {
      firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    }
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.name === secondChoice.name) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.name === firstChoice.name ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  useEffect(() => {
    if (cards.length && cards.every((card) => card.matched)) {
      setIsActive(false);
      setShowModal(true);
    }
  }, [cards]);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  const resetGame = () => {
    setShowModal(false);
    setIsActive(true);
    setTime(0);
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  };

  return (
    <div className="game-board">
      <div className="timer">{`Time: ${time}s`}</div>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              card === firstChoice || card === secondChoice || card.matched
            }
          />
        ))}
      </div>
      {showModal && <Modal time={time} onReset={resetGame} />}
    </div>
  );
};

export default GameBoard;
