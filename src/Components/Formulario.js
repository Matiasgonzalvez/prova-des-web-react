import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Formulario = ({livrosSalvos, setLivrosSalvos}) => {
    const [nome, setNome] = useState("");
    const [paginas, setPaginas] = useState("");
    const [autor, setAutor] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const novoLivro = {nome, paginas, autor};
        const novosLivros = [...livrosSalvos, novoLivro];

        localStorage.setItem("livros", JSON.stringify(novosLivros));

        setLivrosSalvos(novosLivros);

        setNome("");
        setPaginas("");
        setAutor("");
        navigate('/')
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} >
                <div className="form-header">Adicionar Novo Livro</div>
                <div className="form-group">
                    <label className="form-label">Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="form-input"
                           required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Páginas:</label>
                    <input type="number" value={paginas} onChange={(e) => setPaginas(e.target.value)}
                           className="form-input" required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Autor:</label>
                    <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} className="form-input"
                           required/>
                </div>
                <button type="submit" className="form-button" style={{background: "#00994d"}}>Salvar</button>
                <button onClick={() => navigate('/')} className="form-button" style={{background: "#d9d9d9"}}>Cancelar
                </button>
            </form>
        </div>
    );
};

export default Formulario;
