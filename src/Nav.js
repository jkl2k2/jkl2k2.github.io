import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-sm sticky-top bg-secondary-subtle p-4">
        <div className="container-sm">
          <a className="navbar-brand text-dark" href="#"><b>&gt; <span className="border-bottom border-2 border-dark-subtle">Joshua Lomelin</span></b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-underline">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}