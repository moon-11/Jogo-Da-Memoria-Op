import { useEffect, useState } from 'react';
import CardType from '../../models/card';
import { initialCards } from '../../utils/initialCards';
import Card from '../cards';
import './styles.scss';

interface GameBoardType {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export default function GameBoard({ cards, setCards }: GameBoardType) {
  const [firstChoice, setFirstChoice] = useState<CardType | null>(null);
  const [secondChoice, setSecondChoice] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random().toString(36).substr(2, 9),
      })); // Convertendo id para string única
    setCards(shuffledCards);
  }, []);

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

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  return (
    <div className='card-container'>
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
  );
}
