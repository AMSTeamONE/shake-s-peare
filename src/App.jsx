import "./App.css";
import Home from "./Home";
import Create from "./Create";
import Contato from "./Contato";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
