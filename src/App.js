import './App.css';
import {Route, Routes} from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Cadastro from './Pages/Cadastro';
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Editar from './Pages/Editar';

function App() {
  return (
    <div className="App">
      <Header>Cadastro de Livros</Header>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
      <Footer>Direitos Reservados - Julio Cezar Rutke</Footer>
    </div>
  );
}

export default App;
