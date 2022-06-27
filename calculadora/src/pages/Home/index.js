import React from 'react';
import Menu from '../../componentes/navMenu';
import Footer from '../../componentes/footer';
import Calculadora from '../../componentes/calculadora';
import "./style.css";

function Home() {
  return (    
    <div className="tela">
        <Menu/>
        <Calculadora/>
        <Footer/>
    </div>
  );
}
export default Home;
