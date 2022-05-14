import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Rotas from './rotas'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Rotas/>
      </div>
    </BrowserRouter>
  );
}

export default App;
