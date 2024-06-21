import Chopper from '../assets/img/Chopper.jpg';
import Luffy from '../assets/img/Luffy.jpg';
import Luffy2 from '../assets/img/Luffy2.jpg';
import Nami from '../assets/img/Nami.jpg';
import Robin from '../assets/img/Robin.jpg';
import Sanji from '../assets/img/Sanji.jpg';
import Shanks from '../assets/img/Shanks.jpg';
import Usopp from '../assets/img/Usopp.jpg';
import Vivi from '../assets/img/Vivi.jpg';
import Zoro from '../assets/img/Zoro.jpg';

import CardType from '../models/card';

export const initialCards: CardType[] = [
  {
    id: 1,
    name: 'Luffy',
    image: Luffy,
    matched: false,
    frontImage: '',
    backImage: '',
  },
  {
    id: 2,
    name: 'Zoro',
    image: Zoro,
    matched: false,
    frontImage: '',
    backImage: '',
  },
  {
    id: 3,
    name: 'Vivi',
    image: Vivi,
    matched: false,
    frontImage: '',
    backImage: '',
  },
  {
    id: 4,
    name: 'Usopp',
    image: Usopp,
    matched: false,
    frontImage: '',
    backImage: '',
  },
  {
    id: 5,
    name: 'Shanks',
    image: Shanks,
    matched: false,
    frontImage: '',
    backImage: '',
  },
  {
    id: 6,
    name: 'Sanji',
    image: Sanji,
    matched: false,
    frontImage: '',
    backImage: '',
  },
  {
    id: 7,
    name: 'Robin',
    image: Robin,
    matched: false,
    frontImage: '',
    backImage: '',
  },
  {
    id: 8,
    name: 'Nami',
    image: Nami,
    matched: false,
    frontImage: '',
    backImage: '',
  },
  {
    id: 9,
    name: 'Luffy2',
    image: Luffy2,
    matched: false,
    frontImage: '',
    backImage: '',
  },
  {
    id: 10,
    name: 'Chopper',
    image: Chopper,
    matched: false,
    frontImage: '',
    backImage: '',
  },
];

const cards: CardType[] = [];
initialCards.forEach((card) => {
  cards.push({ ...card });
  cards.push({ ...card });
});
