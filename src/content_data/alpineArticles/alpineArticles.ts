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
    title: "FA: Cerberus",
    description:
      "Following a grueling 25-hour alpine push, Nat Walkom and I set out with skis and packs to establish a new route near Pulpit Peak",
    imageUrl: cerebrusCard ,
    link: "/cerberus",
    location: {
      name: "Pulpits, Alberta, Canada",
      latitude: 51.5681,
      longitude: -116.3681,
    },
  },
  {
    title: "Yamnuska Whipper",
    description:
      " What started as a thrilling trad climb turned into a heart-stopping moment when I took a 30-foot fall after a chunk of choss gave way. ",
    imageUrl: yamnuskaCard,
    link: "/yamnuska-whipper",
    location: {
      name: "Yamnuska, Alberta, Canada",
      latitude: 51.0903,
      longitude: -115.1236,
    },
  },
];
