import { Link, Outlet } from "react-router-dom";



function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Produtos</Link>      
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cadastro-produtos">Cadastro</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/consulta-produtos">Consulta</Link>
                    </li>                
                </ul>
            </div>

            <Outlet />
        </div>
        </nav>
    )
}

export default Navbar;