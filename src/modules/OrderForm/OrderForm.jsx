import useForm from "../../shared/hooks/useForm";
import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";
import initialState from "./initialState";
import fields from "./fields";

import styles from "./order-form.module.scss";

const OrderForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, phone, address } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField value={phone} handleChange={handleChange} {...fields.phone} />
      <TextField
        value={address}
        handleChange={handleChange}
        {...fields.address}
      />
      <Button>Order</Button>
    </form>
  );
};

export default OrderForm;
