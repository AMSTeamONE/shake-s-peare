import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const API_URL = "https://shake-s-peare.onrender.com/books";
  const [produtos, setProdutos] = useState([]);
  const [coffeeShop, setCoffeeShop] = useState([]);
  const [firstN, setFirstN] = useState(5);

  function carregaProdutos() {
    axios.get(API_URL).then((res) => {
      setProdutos(res.data);
      setCoffeeShop(() => res.data);
      console.log(res.data);
    });
  }

  function registrarProduto(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const produto = {
      title: data.get("title"),
      author: data.get("author"),
      description: data.get("description"),
      rating: data.get("rating"),
      picture: data.get("picture") ?? "sem-imagem",
    };

    axios.post(API_URL, produto).then((res) => {
      console.log(res.data);
      carregaProdutos();
    });
  }

  useEffect(() => {
    carregaProdutos();
  }, []);

  return (
    <div className="block bg-indigo-50 min-h-[100vh]">
      <Navbar />

      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-6">
          Para a sua pausa depois do almoço
        </h2>

        <section className="flex gap-8 mb-10">
          {produtos.map((prod, i) => (
            <ProductCard
              prod={prod}
              carregaProdutos={carregaProdutos}
              key={i}
            />
          ))}
        </section>

        <form
          action="API_URL"
          method="post"
          className="flex flex-col gap-3 mb-10"
          onSubmit={registrarProduto}
        >
          <input
            type="text"
            name="name"
            maxLength={50}
            placeholder="Nome do produto"
            className="w-60 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
          />
          <input
            type="number"
            name="price"
            min={0}
            step={0.01}
            placeholder="Preço"
            className="w-32 px-2 py-1 rounded-lg shadow-sm border border-stone-300"
          />
          <input
            type="url"
            name="picture"
            id="picture"
            placeholder="URL da imagem do produto"
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

export default App;
