import CounterContainer from "../../common/counter/CounterContainer";
import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./itemDetail.css";
export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div>
      <div className="itemDetail">
        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <Typography
              fontSize="30px"
              alignItems="center"
              gutterBottom
              variant="h5"
              component="div"
            >
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
        <Card style={{ display: "flex", justifyContent: "end" }}>
          <CardActionArea>
            <Typography
              fontSize="20px"
              alignItems="end"
              gutterBottom
              variant="h5"
              component="div"
            >
              {productSelected.description}
            </Typography>
          </CardActionArea>
        </Card>
      </div>
      {initial && (
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          Ya tienes {initial} unidades
        </h4>
      )}
      {showCounter ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      ) : (
        <div>
          <Link to="/cart">
            <Button
              style={{ display: "inline", justifyContent: "center" }}
              color="secondary"
              variant="contained"
            >
              Terminar compra
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
