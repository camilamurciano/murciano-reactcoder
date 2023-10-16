import CounterContainer from "../../common/counter/CounterContainer";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            {productSelected.title}
          </Typography>
          <CardMedia
            component="img"
            height="160"
            width="60"
            image={productSelected.img}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};
