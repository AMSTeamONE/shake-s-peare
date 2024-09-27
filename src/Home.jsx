import axios from "axios";
import { useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function Home(){
    const API_URL = "https://shake-s-peare.onrender.com/books";
    const [produtos, setProdutos] = useState([]);

    function carregaProdutos() {
        axios
          .get(API_URL)
          .then((res) => {
            setProdutos(res.data);
            console.log(res.data);
          })
          .catch((e) => console.log(e));
      }
    
      useEffect(() => {
        carregaProdutos();
      }, []);
    
      return (
        <div className="block bg-indigo-50 min-h-[100vh]">
          <Navbar />
    
          <main className="p-4">
            <h2 className="text-2xl font-semibold mb-6">
              O que tem na sua estante...
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
          </main>
        </div>
      );
}
export default Home;