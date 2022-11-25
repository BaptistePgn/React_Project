import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import PokeApi from '../components/PokeApi';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>ACCUEIL</h1>
            <PokeApi />
        </div>
    );
};

export default Home;
