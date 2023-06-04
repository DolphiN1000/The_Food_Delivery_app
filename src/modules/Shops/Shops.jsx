import { NavLink } from "react-router-dom";
// import Button from "../../shared/components/Button/Button";
import styles from "./shops.module.scss";
import Goods from "../Goods/Goods";
import { useState } from "react";

const shop1 = {
  good1: {
    image: "",
    name: "Big big burger",
    price: "10",
  },
  good2: {
    image: "",
    name: "Big big burger",
    price: "20",
  },
  good3: {
    image: "",
    name: "Big big burger",
    price: "30",
  },
  good4: {
    image: "",
    name: "Big big burger",
    price: "40",
  },
};
const shop2 = {
  good1: {
    image: "",
    name: "Big big burger",
    price: "10",
  },
  good2: {
    image: "",
    name: "Big big burger",
    price: "20",
  },
  good3: {
    image: "",
    name: "Big big burger",
    price: "30",
  },
  good4: {
    image: "",
    name: "Big big burger",
    price: "40",
  },
};
const shop3 = {
  good1: {
    image: "",
    name: "Big big burger",
    price: "10",
  },
  good2: {
    image: "",
    name: "Big big burger",
    price: "20",
  },
  good3: {
    image: "",
    name: "Big big burger",
    price: "30",
  },
  good4: {
    image: "",
    name: "Big big burger",
    price: "40",
  },
};
const shop4 = {
  good1: {
    image: "",
    name: "Big big burger",
    price: "10",
  },
  good2: {
    image: "",
    name: "Big big burger",
    price: "20",
  },
  good3: {
    image: "",
    name: "Big big burger",
    price: "30",
  },
  good4: {
    image: "",
    name: "Big big burger",
    price: "40",
  },
};
const shop5 = {
  good1: {
    image: "",
    name: "Big big burger",
    price: "10",
  },
  good2: {
    image: "",
    name: "Big big burger",
    price: "20",
  },
  good3: {
    image: "",
    name: "Big big burger",
    price: "30",
  },
  good4: {
    image: "",
    name: "Big big burger",
    price: "40",
  },
};
const shops = { shop1, shop2, shop3, shop4, shop5 };

const Shops = () => {
  const [activeId, setActiveId] = useState({})
  // const onSelect = (key)=> {
    
  //   setActiveId(key)

  // }
  const elements = Object.entries(shops).map(( [key]) => {
    const id = key;
    return (
      <li className={styles.li} key={key}>
        <NavLink className={styles.link}
        //  onClick={onSelect(key)} 
         to={`/shops/${id}`}>
          {key}
        </NavLink>
      </li>
    );
  });
  return (
    <div className={styles.wrapperC}>
      <div className={styles.container}>{elements}</div>
      <div className={styles.container}>
        <Goods shop={shops[activeId]} />
      </div>
    </div>
  );
};

export default Shops;
