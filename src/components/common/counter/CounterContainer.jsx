import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);
  const [nombre, setNombre] = useState("pepito");

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "Cantidad maxima de Stock!",
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    // PETICION A UN SERVIDOR
  }, [nombre, contador]); // array de dependencias

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={onAdd}
      //nombre={nombre}
      //setNombre={setNombre}
    />
  );
};

export default CounterContainer;
