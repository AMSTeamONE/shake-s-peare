import "./App.css";
import Navbar from "./components/Navbar";

function Contato(){
    return(
        <div className="block bg-indigo-50 min-h-[100vh]">
            <Navbar />
            <main className="p-4">
                <h2 className="text-2xl font-semibold mb-6">
                Contato da equipe:
                </h2>
                <h3 className="font-semibold mb-6">Colaboradores:</h3>
                <li> Ágata Cecília</li>
                <li> Jorge Terence</li>
                <li> Sarah Melo</li>
                <br></br>
                <a href="https://github.com/AMSTeamONE">Saiba Mais</a>
            </main>
        </div>
    )
}
export default Contato;