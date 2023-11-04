import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContextt } from "../../../context/CartContextt";

const CartWidget = () => {
  const e = useContext(CartContextt);

  const { getTotalQuantity } = useContext(CartContextt);
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
