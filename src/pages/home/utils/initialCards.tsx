import { CardType } from "../../../models/cardModels";

const initialCards: CardType[] = [
  {
    id: 1,
    name: "Luffy",
    image: "../../../assets/img/Luffy.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
  {
    id: 2,
    name: "Zoro",
    image: "../../../assets/img/Zoro.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
  {
    id: 3,
    name: "ViVi",
    image: "../../../assets/img/Vivi.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
  {
    id: 4,
    name: "Usopp",
    image: "../../../assets/img/Usopp.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
  {
    id: 5,
    name: "Shanks",
    image: "../../../assets/img/Shanks.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
  {
    id: 6,
    name: "Sanji",
    image: "../../../assets/img/Sanji.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
  {
    id: 7,
    name: "Robin",
    image: "../../../assets/img/Robin.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
  {
    id: 8,
    name: "Nami",
    image: "../../../assets/img/Nami.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
  {
    id: 9,
    name: "Luffy2",
    image: "../../../assets/img/Luffy2.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
  {
    id: 10,
    name: "Chopper",
    image: "../../../assets/img/Chopper.jpg",
    matched: false,
    frontImage: "",
    backImage: "",
  },
];

const cards: CardType[] = [];
initialCards.forEach((card) => {
  cards.push({ ...card });
  cards.push({ ...card });
});

export default initialCards;
