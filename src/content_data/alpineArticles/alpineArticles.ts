import manholeCard from "../../assets/alpine/manhole/ManholeCard.webp"
import yamnuskaCard from "../../assets/alpine/yamnuska/YamnuskaCard.webp"
import cerebrusCard from "../../assets/alpine/cerberus/CerberusCard.webp"

export const alpineArticles = [
  // {
  //   title: "tempalte",
  //   description:
  //     "A personal account of solo climbing in the European Alps, exploring the mental and physical challenges.",
  //   imageUrl: "img",
  //   link: "/solo-in-the-alps",
  //   location: {
  //     name: "European Alps",
  //     latitude: 46.2276,
  //     longitude: 6.1432,
  //   },
  // },
  {
    title: "Berg Slawinski",
    description:
      "A topgraphic account of the first successful second ascent of the Manhole; establish by Raphael Slawinski and Alex Berg",
    imageUrl: manholeCard,
    link: "/berg-slawinski",
    location: {
      name: "Manhole, Alberta, Canada",
      latitude: 50.8333,
      longitude: -115.2333,
    },
  },
  {
    title: "FA: Cerebrus",
    description:
      "",
    imageUrl: cerebrusCard ,
    link: "/mountain-weather",
    location: {
      name: "Pulpits, Alberta, Canada",
      latitude: 51.5681,
      longitude: -116.3681,
    },
  },
  {
    title: "Yamnuska Whipper",
    description:
      "",
    imageUrl: yamnuskaCard,
    link: "/mountain-weather",
    location: {
      name: "Yamnuska, Alberta, Canada",
      latitude: 51.0903,
      longitude: -115.1236,
    },
  },
];
