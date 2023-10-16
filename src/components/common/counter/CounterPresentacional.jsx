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
      <button onClick={sumar}>sumar</button>
      <h4 style={{ margin: 0 }}> {contador} </h4>
      <button onClick={restar}>restar</button>
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>

      {/*<h4>{nombre}</h4>
          <button onClick={()=>setNombre("juancito")}>Cambiar nombre</button> */}
    </div>
  );
};

export default CounterPresentacional;
