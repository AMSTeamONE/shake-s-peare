import axios from "axios";
import { price } from "../lib/format";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ prod, carregaProdutos }) => {
  function remover(id) {
    let api = "https://fishnet-api-py.onrender.com/itens";
    axios.delete(`${api}/${id}`).then(() => {
      carregaProdutos();
    });
  }

  return (
    <div className="border border-slate-400 shadow rounded-lg w-52">
      <img src={prod.picture} alt={prod.name} className="w-40 rounded-t-lg" />

      <div className="p-3">
        
        <img src={prod.cover} alt={`Capa do livro: ${prod.title}`} />
        <p className="truncate font-bold">{prod.title}</p>
        <p className="truncate">{prod.author}</p>
        <button
          onClick={remover}
          className="rounded-lg bg-indigo-400 border border-indigo-700 shadow-sm w-full py-1 mt-2"
        >
          Exlcuir
        </button>
      </div>
    </div>
  );
};
