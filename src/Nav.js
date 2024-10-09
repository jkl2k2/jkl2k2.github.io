function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-sm p-4 border-bottom border-secondary">
                <div className="container-sm">
                    <a className="navbar-brand text-dark" href="#"><b>Joshua Lomelin</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-dark">Disabled</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;