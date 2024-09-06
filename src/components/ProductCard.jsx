import axios from "axios";
import { price } from "../lib/format";

export default ({ prod, carregaProdutos }) => {
  function remover (id){
    let api = "https://fishnet-api-py.onrender.com/itens";
    axios.delete(`${api}/${id}`)
      .then(()=>{

      })
  }
  return (
    <div className="border border-slate-400 shadow rounded-lg">
      <img src={prod.picture} alt={prod.name} className="w-40 rounded-t-lg" />

      <div className="p-3">
        {prod.discount ? (
          <div className="flex flex-col">
            <span className="font-bold text-lg">
              {price(prod.price * (1 - prod.discount))}
            </span>
            <span className="line-through text-stone-500 text-sm">
              {price(prod.price)}
            </span>
          </div>
        ) : (
          <span className="font-bold text-lg">{price(prod.price)}</span>
        )}
        <p>{prod.name}</p>
      </div>
    </div>
  );
};
