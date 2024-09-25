import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ prod, carregaProdutos }) => {
  function remover(id) {
    let api = "https://shake-s-peare.onrender.com/books";
    axios.delete(`${api}/${id}`).then(() => {
      carregaProdutos();
    }).catch(e => console.error(e.response.data));
  }

  return (
    <div className="border border-slate-400 shadow rounded-lg w-52">
      <img src={prod.picture} alt={prod.name} className="w-40 rounded-t-lg" />

      <div className="p-3">
        
        <img src={prod.cover} alt={`Capa do livro: ${prod.title}`} className="h-64 m-auto mb-2" />
        <p className="truncate font-bold">{prod.title}</p>
        <p className="truncate">{prod.author}</p>
        <button
          onClick={() => remover(prod._id)}
          className="rounded-lg bg-indigo-400 border border-indigo-700 shadow-sm w-full py-1 mt-2"
        >
          Excluir
        </button>
      </div>
    </div>
  );
};
