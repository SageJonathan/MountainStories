import br156Card from "../../assets/travel/br/BRCard.webp";
import surinameCard from "../../assets/travel/dharma/DharmaCard.webp";
import roraimaCard from "../../assets/travel/roraima/RoraimaCard.webp";

export const travelArticles = [
  {
    title: "BR-156: Red Earth Road",
    description:
      "Traveling along BR-156 in Brazil, cutting through the heart of the Amazon rainforest and red clay landscapes.",
    imageUrl: br156Card,
    link: "/br-156-red-earth-road",
    location: {
      name: "BR-156, Brazil",
      latitude: 1.5586,
      longitude: -52.7769,
    },
  },
  {
    title: "French Guiana: Drunk on Dharma",
    description:
      "A reflective journey into the heart of French Guiana's rainforests, blending solitude, nature, and spiritual insight in Matiti.",
    imageUrl: surinameCard,
    link: "/french-guiana-dharma",
    location: {
      name: "Matiti, French Guiana",
      latitude: 5.2827,
      longitude: -52.8206,
    },
  },
  {
    title: "Roraima: A Thousand Steps",
    description:
      "Climbing Mount Roraima, the legendary tabletop mountain at the tripoint of Venezuela, Brazil, and Guyana.",
    imageUrl: roraimaCard,
    link: "/roraima-steps",
    location: {
      name: "Mount Roraima, Brazil",
      latitude: 5.2270,
      longitude: -60.7500,
    },
  },
];
