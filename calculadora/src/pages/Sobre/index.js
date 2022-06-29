import React from 'react';
import Menu from '../../componentes/navMenu';
import Conteudo from '../../componentes/conteudo';
import Footer from '../../componentes/footer';
import "./style.css";

function Home() {
  return (    
    <div className="tela">
        <Menu/>
        <Conteudo/>
        <Footer/>
    </div>
  );
}
export default Home;
