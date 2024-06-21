import CardType from '../../models/card';
import './styles.scss';

interface CardProps {
  card: CardType;
  handleChoice: (card: CardType) => void;
  flipped: boolean;
}

export default function Card({ card, handleChoice, flipped }: CardProps) {
  const handleClick = () => {
    if (!flipped) {
      handleChoice(card);
    }
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className='flipper'>
        <img className='back' src={card.image} alt={card.name} />
        <img
          className='front'
          src={
            'https://i.pinimg.com/564x/b5/ea/b3/b5eab3fd30a8c09f1a5dd3ca140615ff.jpg'
          }
          alt=''
        />
      </div>
    </div>
  );
}
