import { Badge } from "@mui/material";
import { BsCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} showZero color="primary">
        <BsCartCheckFill size={32} />
      </Badge>
    </div>
  );
};

export default CartWidget;
