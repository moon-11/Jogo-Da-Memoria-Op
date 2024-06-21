import { useEffect, useState } from 'react';
import GameBoard from '../../components/gameBoard';
import Modal from '../../components/modal';
import CardType from '../../models/card';
import { initialCards } from '../../utils/initialCards';
import './styles.scss';

type Timeout = ReturnType<typeof setTimeout>;

export default function Home() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer: Timeout;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000) as unknown as Timeout;
    }
    return () => clearInterval(timer);
  }, [isActive]);

  useEffect(() => {
    if (cards.length && cards.every((card) => card.matched)) {
      setIsActive(false);
      setShowModal(true);
    }
  }, [cards]);

  const resetGame = () => {
    setShowModal(false);
    setIsActive(true);
    setTime(0);
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random().toString(36).substr(2, 9),
      }));
    setCards(shuffledCards);
  };

  return (
    <div className='page'>
      <div className='game-board'>
        <div className='timer'>{`Time: ${time}s`}</div>
        <GameBoard cards={cards} setCards={setCards} />
      </div>
      {showModal && <Modal time={time} onReset={resetGame} />}
    </div>
  );
}
