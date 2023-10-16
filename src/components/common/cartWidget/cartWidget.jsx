import { Badge } from "@mui/material";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge style={{ margin: 0 }} badgeContent={0} showZero color="primary">
        <BsCartCheckFill size={30} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
