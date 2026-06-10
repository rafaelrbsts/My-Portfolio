

function Header() {
    return(
        <div className="cabecalho">
            <h1>{'<Rafael/>'}</h1>
            <ul>
                <li><a className="nav-link active" href="#inicio">Início</a></li>
                <li><a className="nav-link " href="#projetos">Projetos</a></li>
                <li><a className="nav-link " href="#objetivo">Formação e Objetivo</a></li>
            </ul>
        </div>
    )
}

export default Header