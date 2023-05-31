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
];

export default navItems;
