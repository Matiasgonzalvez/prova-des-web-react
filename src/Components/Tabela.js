import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Tabela = () => {
    const [livrosSalvos, setLivrosSalvos] = useState([]);

    function removeLivro(index) {
        let livros = JSON.parse(localStorage.getItem("livros") || "[]");
        livros.splice(index, 1);
        localStorage.setItem("livros", JSON.stringify(livros));
        setLivrosSalvos(livros);
    }

    useEffect(() => {
        let livros = JSON.parse(localStorage.getItem("livros") || "[]");
        console.log("Livros", livros);
        setLivrosSalvos(livros);
    }, []);

    return (
        <section id="tabela">
            <div id="header_tabela">
                <div className="nome">Nome</div>
                <div className="paginas">Páginas</div>
                <div className="autor">Autor</div>
                <div className="acoes">Ações</div>
            </div>
            <div id="body_tabela">
                {livrosSalvos?.map((livro, index) => (
                    <div className="livro" key={index}>
                        <div className="nome">{livro.nome}</div>
                        <div className="paginas">{livro.paginas}</div>
                        <div className="autor">{livro.autor}</div>
                        <div className="acoes">
                            <Link to={"/editar/" + index}>Editar</Link>
                        </div>
                        <div className="acoes" onClick={() => removeLivro(index)}>
                            <Link to="/">Remover</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tabela;