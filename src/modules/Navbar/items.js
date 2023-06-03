import { nanoid } from "nanoid";

const navItems = [
  {
    id: nanoid(),
    text: "Shop",
    link: "/shops",
  },
  {
    id: nanoid(),
    text: "Shopping Cart",
    link: "/cart",
  },
  // {
  //   id: nanoid(),
  //   text: "History",
  //   link: "/history",
  // }, {
  //   id: nanoid(),
  //   text: "Coupons",
  //   link: "/coupons",
  // },
];

export default navItems;
