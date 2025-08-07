import { useState } from 'react';


let isShowing = false;

function Nav() {

  const [toggleshow, settoggleshow] = useState('');

  function handleClick() {
    if (isShowing === false) {
      isShowing = true;
      settoggleshow('navbar-collapse show');
    } else {
      isShowing = false;
      settoggleshow('collapse navbar-collapse');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          onClick={() => handleClick()}
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isShowing}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={toggleshow} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
