import React from 'react';

function HeaderHome() {
    return (
        <nav className="nav" id="nav">
            <div className="nav-center">
                <div className="nav-header ">
                    <div className="nav-logo">
                        <p>Jack <span>Sari</span></p>
                    </div>
                    <button className="nav-btn" id="nav-btn">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links ">
                    <li className="">
                        <a href="index.html">home</a>
                    </li>
                    <li>
                        <a href="about.html">about</a>
                    </li>
                    <li>
                        <a href="projects.html">proyects</a>
                    </li>
                    <li>
                        <a href="contact.html">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderHome;
