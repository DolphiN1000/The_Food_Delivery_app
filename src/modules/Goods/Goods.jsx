import { useParams } from "react-router-dom";
import styles from "./goods.module.scss";
import { useEffect, useState } from "react";
import { getAllGoodsByIdShop } from "../../shared/services/goods";
import Button from "../../shared/components/Button/Button";


const Goods = (shop) => {
  // const [shop, setShop] = useState();
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchShop = async () => {
  //     try {
  //       const result = await getAllGoodsByIdShop(id);
  //       setShop(result);
  //     } catch (error) {}
  //   };
  //   fetchShop();
  // }, [id]);

  // const elements = shop.map(() => {
  //   return (
  //     <div className={styles.wrapper}>
  //       <p>Image</p>
  //       <p>text</p>
  //       <button>Add to cart</button>
  //     </div>
  //   );
  // });
  const elements = `<div className={styles.wrapper}>
        <p>Image</p>
        <p>text</p>
        <button>Add to cart</button>
      </div>
      <div className={styles.wrapper}>
            <p>Image</p>
            <p>text</p>
            <button>Add to cart</button>
          </div>`
  return <div className={styles.container}>{elements}</div>;
};

export default Goods;
