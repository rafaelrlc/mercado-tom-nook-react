import { useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AvaliableItems.module.css";
import SeparateItem from "./Item/SeparateItem";

const items_stored = [
  [
    {
      key: "i1",
      name: "Bitterling",
      price: "900",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ea/NH-Icon-bitterling.png/revision/latest?cb=20200401003128",
    },
    {
      key: "i2",
      name: "Pale Chub",
      price: "200",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-palechub.png/revision/latest?cb=20200401003129",
    },
    {
      key: "i3",
      name: "Crucian Carp",
      price: "160",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/0/03/NH-Icon-cruciancarp.png/revision/latest?cb=20200401003129",
    },
    {
      key: "i4",
      name: "Dace",
      price: "240",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-dace.png/revision/latest?cb=20200401003129",
    },
    {
      key: "i5",
      name: "Carp",
      price: "300",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-carp.png/revision/latest?cb=20200401003129",
    },
    {
      id: "i6",
      name: "Koi",
      price: "4000",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/7/74/NH-Icon-koi.png/revision/latest?cb=20200401003129",
    },
    {
      key: "i7",
      name: "Goldfish",
      price: "1300",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/NH-Icon-goldfish.png/revision/latest?cb=20200401003129",
    },
    {
      key: "i8",
      name: "Pop Eyed Goldfish",
      price: "1300",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c9/NH-Icon-popeyedgoldfish.png/revision/latest?cb=20200401003129",
    },
    {
      key: "i9",
      name: "Ranchu Goldfish",
      price: "4500",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/f/f9/NH-Icon-ranchugoldfish.png/revision/latest?cb=20200401003129",
    },
    {
      key: "i10",
      name: "Killifish",
      price: "300",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-killifish.png/revision/latest?cb=20200401003129",
    },

    {
      key: "i11",
      name: "Crawfish",
      price: "200",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/c/cd/NH-Icon-crawfish.png/revision/latest?cb=20200401003129",
    },
  ],

  [
    {
      key: "e1",
      name: "Queen Alexandra's Birdwing",
      price: "4000",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b8/NH-Icon-queenalexandrasbirdwing.png/revision/latest?cb=20200401005429",
    },
    {
      key: "e2",
      name: "Moth",
      price: "130",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-moth.png/revision/latest?cb=20200401005428",
    },
    {
      key: "e3",
      name: "Atlas Moth",
      price: "3000",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-atlasmoth.png/revision/latest?cb=20200401005428",
    },
    {
      id: "e4",
      name: "KoMadagascan Sunset Mothi",
      price: "2500",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7d/NH-Icon-madagascansunsetmoth.png/revision/latest?cb=20200401005429",
    },
    {
      key: "e5",
      name: "Emperor Butterfly",
      price: "4000",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-emperorbutterfly.png/revision/latest?cb=20200401005428",
    },
    {
      key: "e6",
      name: "Long Lacust",
      price: "200",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-longlocust.png/revision/latest?cb=20200401005429",
    },
    {
      key: "e7",
      name: "Migratory Locust",
      price: "600",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e4/NH-Icon-migratorylocust.png/revision/latest?cb=20200401005429",
    },
    {
      key: "e8",
      name: "Rice Grasshopper",
      price: "160",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/d/d3/NH-Icon-ricegrasshopper.png/revision/latest?cb=20200401005428",
    },

    {
      key: "e9",
      name: "Cricket",
      price: "130",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Icon-cricket.png/revision/latest?cb=20200401005428",
    },
    {
      key: "e10",
      name: "Bell Cricket",
      price: "430",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-bellcricket.png/revision/latest?cb=20200401005428",
    },
    {
      key: "e11",
      name: "Mantis",
      price: "430",
      descripton: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-mantis.png/revision/latest?cb=20200401005429",
    },
  ],
  [
    {
      key: "a1",
      name: "Acanthostega",
      price: "2000",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/c/cc/NH-Furniture-acanthostega.png/revision/latest?cb=20200404013825",
    },
    {
      key: "a2",
      name: "Amber",
      price: "1200",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/3/32/NH-Furniture-amber.png/revision/latest?cb=20200404013825",
    },
    {
      key: "a3",
      name: "Ammonite",
      price: "1100",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/3/32/NH-Furniture-ammonite.png/revision/latest?cb=20200404013825",
    },
    {
      key: "a4",
      name: "Anomalocaris",
      price: "2000",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2e/NH-Furniture-anomalocaris.png/revision/latest?cb=20200404013826",
    },
    {
      key: "a5",
      name: "Cropolite",
      price: "1100",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/0/04/NH-Furniture-coprolite.png/revision/latest?cb=20200404013826",
    },
    {
      id: "a6",
      name: "Jurumaia",
      price: "1000",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/7/73/NH-Furniture-juramaia.png/revision/latest?cb=20200404013826",
    },
    {
      key: "a7",
      name: "Trilobite",
      price: "1300",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/4/42/NH-Furniture-trilobite.png/revision/latest?cb=20200404013827",
    },
    {
      key: "a8",
      name: "	Australopith",
      price: "1100",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b0/NH-Furniture-australopith.png/revision/latest?cb=20200404013826",
    },
    {
      key: "a9",
      name: "Eusthenopteron",
      price: "2000",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8c/NH-Furniture-eusthenopteron.png/revision/latest?cb=20200404013826",
    },
    {
      key: "a10",
      name: "Archaeopteryx",
      price: "1300",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Furniture-archaeopteryx.png/revision/latest?cb=20200404013826",
    },

    {
      key: "a11",
      name: "Dinosaur Track",
      price: "1000",
      description: "um peixe ai",
      image:
        "https://vignette.wikia.nocookie.net/animalcrossing/images/a/a5/NH-Furniture-dinosaurtrack.png/revision/latest?cb=20200404013826",
    },
  ],
];

const AvaliableItems = (props) => {
  let itemList = [];
  let itemIndex;

  console.log(props.type);

  const fetchItems = async () => {
    const response = await fetch(`http://acnhapi.com/v1/fish`);
    const data = await response.json();
    const data_loop = [data];

    itemList = data_loop.map((item) => {
      return {
        key: item.id,
        name: "JOAO",
        price: item.price,
        image: item.icon_uri,
      };
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const avaliable_items = itemList.map((item) => (
    <SeparateItem
      id={item.key}
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.image}
    ></SeparateItem>
  ));
  return (
    <Card className={classes.container_vendas}>
      <ul>{avaliable_items}</ul>
    </Card>
  );
};

export default AvaliableItems;
