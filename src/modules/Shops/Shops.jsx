import { NavLink } from "react-router-dom";
// import Button from "../../shared/components/Button/Button";
import styles from "./shops.module.scss";

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
const shops = {shop1, shop2, shop3, shop4, shop5};

const Shops = () => {
  const elements = Object.entries(shops).map(([key]) => {return(
    <li 
    // key={id}
    >
        <NavLink className={styles.link}
        //  to={link}
         >{key}</NavLink>
    </li>)
  });
  return <div className={styles.container}>{elements}</div>;
};

export default Shops;
