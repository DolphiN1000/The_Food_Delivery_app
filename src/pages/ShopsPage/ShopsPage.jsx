import Goods from "../../modules/Goods/Goods"
import Shops from "../../modules/Shops/Shops"

import styles from './shopsPage.module.scss'

const  ShopsPage = ()=>{return <div className={styles.wrapper}>
    <Shops />
    <Goods />
</div> }

export default ShopsPage
