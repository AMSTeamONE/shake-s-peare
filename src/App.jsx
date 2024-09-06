import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      name: "Café preto",
      price: 5,
      discount: 0,
      picture:
        "https://assets.delirec.com/images%2FezvX2clyQIYiWF3AAjQDXT2Xt6q2%2Frecipe%2Feb175f30-1278-4944-adcd-b8974ada7853-Caf%C3%A9--preto.-gallery-0",
    },
    {
      name: "Pom na chapa",
      price: 4,
      discount: 0,
      picture:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2021/09/29/padocaria-sp--pao-na-chapa-1632933532062_v2_1x1.jpg",
    },
    {
      name: "Shake de maracujá",
      price: 16,
      discount: 0.2,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpV-QjOSULXZhq1i5GyGLMRo0Hw9T_aOt4bA&s",
    },
  ];

  const API_URL = "https://fishnet-api-py.onrender.com/itens";
  const [produtos, setProdutos] = useState([]);
  const [coffeeShop, setCoffeeShop] = useState(products);
  const [firstN, setFirstN] = useState(5);

  function carregaProdutos() {
    axios.get(API_URL).then((res) => {
      setProdutos(res.data);
      setCoffeeShop(() => [...products, ...res.data.filter((prod) => prod.temporary)]);
      console.log(res.data);
    });
  }

  function registrarProduto(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const produto = {
      name: data.get("name"),
      price: data.get("price"),
      picture: data.get("picture"),
      temporary: true,
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
          {coffeeShop.map((prod, i) => (
            <ProductCard prod={prod} carregaProdutos={carregaProdutos} key={i} />
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

        <h2 className="text-lg font-semibold">
          Primeiros{" "}
          <input
            type="number"
            value={firstN}
            onChange={(e) => setFirstN(e.target.value)}
            className="w-10 px-2 rounded-lg shadow-sm border border-stone-300"
            style={{ "-moz-appearance": "textfield" }}
          />{" "}
          produtos da API FishNet usada no nosso TCC:
        </h2>
        <ul className="list-disc ml-5">
          {produtos.slice(0, firstN).map((prod, i) => (
            <li key={i}>
              {prod.name}, {prod.price}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
