import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/pokemon" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Pokedex</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;