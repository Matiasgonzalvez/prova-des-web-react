import './App.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Transacoes from './Pages/Transacoes';

function App() {
  return (
    <div className="App">
      <Header>My Finance</Header>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/transacoes" element={<Transacoes />} />
      </Routes>
      <Footer>Todos os direitos reservados - Matias Gonzalvez</Footer>
    </div>
  );
}

export default App;
