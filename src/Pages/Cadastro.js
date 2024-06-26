import { useEffect, useState } from "react"

import Formulario from "../Components/Formulario";

const Cadastro = () => {
    const [livrosSalvos, setLivrosSalvos] = useState([])

    useEffect(() => {
        let livros = JSON.parse(localStorage.getItem("livros") || "[]")
        setLivrosSalvos(livros)
    }, [])

    return( 
            <main>
                <Formulario livrosSalvos={livrosSalvos} setLivrosSalvos={setLivrosSalvos} />
            </main>
    )
}

export default Cadastro;