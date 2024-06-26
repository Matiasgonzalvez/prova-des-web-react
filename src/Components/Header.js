import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <header>
          <h1>{props.children}</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/transacoes">Transações</Link>
          </nav>
      </header>
    )
}

export default Header;