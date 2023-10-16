import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      <h2>{productSelected.title}</h2>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};
