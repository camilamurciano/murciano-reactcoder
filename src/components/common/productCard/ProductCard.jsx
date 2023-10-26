import "./productCard.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="divCard">
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          sx={{ height: 190 }}
          image={item.img}
          title={`image ${item.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {item.price} .-
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button color="secondary" size="small" variant="outlined">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
