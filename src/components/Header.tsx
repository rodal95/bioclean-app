import React from 'react';

export const Header: React.FC = () => {

    return(
    <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
  </div>
</nav>)
};
