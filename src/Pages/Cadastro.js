import { useEffect, useState } from "react"

import Formulario from "../Components/Formulario";
import Tabela from "../Components/Tabela";

const Cadastro = () => {
    const [livrosSalvos, setLivrosSalvos] = useState([])

    useEffect(() => {
        let livros = JSON.parse(localStorage.getItem("livros") || "[]")
        setLivrosSalvos(livros)
    }, [])

    return( 
            <main>
                <Formulario livrosSalvos={livrosSalvos} setLivrosSalvos={setLivrosSalvos} />
                <Tabela livrosSalvos={livrosSalvos} />
            </main>
    )
}

export default Cadastro;