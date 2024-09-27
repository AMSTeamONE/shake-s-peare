import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import carregaProdutos from "./Home.jsx";

function Create() {
    const API_URL = "https://shake-s-peare.onrender.com/books";

    function registrarProduto(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const produto = {
          title: data.get("title"),
          author: data.get("author"),
          pages: data.get("pages"),
          description: data.get("description"),
          dateOfPublishment: data.get("dateOfPublishment"),
          editor: data.get("editor"),
          rating: data.get("rating"),
          cover: data.get("cover"),
        };
    
        console.log(produto);
    
        axios
          .post(API_URL, produto)
          .then((res) => {
            console.log(res.data);
            carregaProdutos();
          })
          .catch((e) => {
            e.stack = null;
            console.log(e.response);
          });
      }
    
    return (
        <div className="block bg-indigo-50 min-h-[100vh]">
          <Navbar />
          <main className="p-4">
            <h2 className="text-2xl font-semibold mb-6">
              Adicionar um livro na estante
            </h2>
    
            <form
              action="API_URL"
              method="post"
              className="flex flex-col gap-3 mb-10"
              onSubmit={registrarProduto}
            >
              <input
                type="text"
                name="title"
                maxLength={50}
                placeholder="Título do livro"
                className="w-60 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
              />
              <input
                type="text"
                name="author"
                maxLength={50}
                placeholder="Autor"
                className="w-60 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
              />
              <input
                type="text"
                name="description"
                maxLength={100}
                placeholder="Descrição"
                className="w-60 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
              />
              <input
                type="date"
                name="dateOfPublishment"
                className="w-60 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
              />
              <input
                type="text"
                name="editor"
                maxLength={50}
                placeholder="Editora"
                className="w-60 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
              />
              <input
                type="number"
                name="pages"
                min={1}
                step={1}
                placeholder="Páginas"
                className="w-32 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
              />
              <input
                type="number"
                name="rating"
                min={1}
                max={5}
                step={1}
                placeholder="Rating"
                className="w-32 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
              />
              <input
                type="url"
                name="cover"
                placeholder="URL da capa"
                className="w-60 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
              />
              <button
                type="submit"
                className="px-4 py-1 bg-indigo-500 text-white rounded-lg shadow-sm w-max"
              >
                Adicionar produto
            </button>
        </form>
      </main>
    </div>
    );
}
export default Create;