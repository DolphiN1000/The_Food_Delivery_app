import { useDispatch } from "react-redux";
import OrderForm from "../../modules/OrderForm/OrderForm";

const ShopingCartePage = () => {
  const dispatch = useDispatch()
  // const handleOrder = (data) => {
  //   dispatch(Order(data))
  // }
  return (
    <div>
      <OrderForm 
      // onSubmit={handleOrder}
      />
    </div>
  );
};

export default ShopingCartePage;
