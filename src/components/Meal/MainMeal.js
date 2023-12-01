import { useState } from "react";
import data from "./data";
import Meal from "./Meal";
const MainMeal = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.title === product.title);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.title === product.title ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.title === product.title);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.title !== product.title));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.title === product.title ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      {" "}
      <Meal onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
    </div>
  );
};

export default MainMeal;
