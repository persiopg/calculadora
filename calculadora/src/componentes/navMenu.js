import React from 'react';
import './navMenu.css';
import img from '../img/calc.jpg';

function Menu (){
    return (
        <nav className="menu">
            <div className="menu-logo">
                <img src={img} alt="logo"/>
            </div>
            <div className="menu-op">
                <ul>
                    <li><a  href="/">Calculadora</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
};
export default Menu;