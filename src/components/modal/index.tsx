import './styles.scss';

interface ModalProps {
  time: string;
  onReset: () => void;
}

export default function Modal({ time, onReset }: ModalProps) {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='modal-header'>Parabéns!</div>
        <div className='modal-body'>Você completou o jogo em {time}.</div>
        <div className='modal-footer'>
          <button className='modal-button' onClick={onReset}>
            Jogar Novamente
          </button>
        </div>
      </div>
    </div>
  );
}
