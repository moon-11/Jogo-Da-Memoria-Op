import { CardType } from "../../../models/cardModels";
export { default as initialCards } from "./initialCards";

const initialCards: CardType[] = [
  {
    id: 1,
    name: "Luffy",
    image: "../../../assets/img/Luffy.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },
  {
    id: 2,
    name: "Zoro",
    image: "../../../assets/img/Zoro.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },
  {
    id: 3,
    name: "ViVi",
    image: "../../../assets/img/Vivi.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },
  {
    id: 4,
    name: "Usopp",
    image: "../../../assets/img/Usopp.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },
  {
    id: 5,
    name: "Shanks",
    image: "../../../assets/img/Shanks.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },
  {
    id: 6,
    name: "Sanji",
    image: "../../../assets/img/Sanji.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },

  {
    id: 7,
    name: "Robin",
    image: "../../../assets/img/Robin.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },
  {
    id: 8,
    name: "Nami",
    image: "../../../assets/img/Nami.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },
  {
    id: 9,
    name: "Luffy2",
    image: "../../../assets/img/Luffy2.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },

  {
    id: 10,
    name: "Chopper",
    image: "../../../assets/img/Chopper.jpg",
    matched: false,
    backImage:
      "https://i.pinimg.com/564x/7b/c5/dc/7bc5dce60d17b7aa600a1dbe974c2408.jpg",
    frontImage: "",
  },
];

const cards: CardType[] = [];
initialCards.forEach((card) => {
  cards.push({ ...card });
  cards.push({ ...card });
});

export default initialCards;
