import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";

const CartWidget = () => {
  const e = useContext(CartContext);
  console.log({ e });
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <Link to="/cart">
      <Badge
        style={{ margin: 0 }}
        badgeContent={total}
        showZero
        color="primary"
      >
        <BsCartCheckFill size={30} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
