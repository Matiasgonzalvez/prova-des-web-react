import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const Editar = () => {
    const [livrosSalvos, setLivrosSalvos] = useState([]);
    const [livro, setLivro] = useState({
        nome: "",
        paginas: "",
        autor: ""
    });

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const livros = JSON.parse(localStorage.getItem("livros") || "[]");
        setLivrosSalvos(livros);

        const index = parseInt(id);
        if (index >= 0 && index < livros.length) {
            const livroEncontrado = livros[index];
            setLivro(livroEncontrado);
        } else {
        }
    }, [id]);

    function handleChange(event) {
        const {name, value} = event.target;
        setLivro(prevLivro => ({
            ...prevLivro,
            [name]: value
        }));
    }

    function handleSubmit() {
        const index = parseInt(id);
        const livrosAtualizados = [...livrosSalvos];
        if (index >= 0 && index < livrosSalvos.length) {
            livrosAtualizados[index] = livro;
        }
        localStorage.setItem("livros", JSON.stringify(livrosAtualizados));
        navigate("/")
    }

    return (
        <main>
            <div className="form-container">
                <form>
                    <div className="form-header">Editar Livro</div>
                    <div className="form-group">
                        <label className="form-label">Nome:</label>
                        <input onChange={handleChange} value={livro.nome} className="form-input" type="text" name="nome"
                               placeholder="Nome do Livro"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Páginas:</label>
                        <input onChange={handleChange} value={livro.paginas} className="form-input" type="text"
                               name="paginas" placeholder="Páginas do Livro"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Autor:</label>
                        <input onChange={handleChange} value={livro.autor} className="form-input" type="text"
                               name="autor" placeholder="Autor do Livro"/>
                    </div>
                    <button onClick={handleSubmit} className="form-button" style={{background: "#00994d"}}>Salvar</button>
                    <button onClick={() => navigate('/')} style={{background: "#d9d9d9"}}
                       className="form-button">Cancelar</button>
                </form>
            </div>
        </main>
    );
}

export default Editar;