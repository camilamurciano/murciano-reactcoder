import { Button } from "@mui/material";
const CounterPresentacional = ({
  sumar,
  contador,
  restar,
  onAdd,
  nombre,
  setNombre,
}) => {
  return (
    <div>
      <Button color="secondary" size="small" onClick={sumar} variant="outlined">
        SUMAR
      </Button>
      <h4 style={{ margin: 0, fontSize: "30px" }}> {contador} </h4>
      <Button
        color="secondary"
        size="small"
        onClick={restar}
        variant="outlined"
      >
        RESTAR
      </Button>
      <Button
        color="secondary"
        size="small"
        variant="contained"
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>

      {/*<h4>{nombre}</h4>
          <button onClick={()=>setNombre("juancito")}>Cambiar nombre</button> */}
    </div>
  );
};

export default CounterPresentacional;
