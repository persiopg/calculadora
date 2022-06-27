import React from "react";
import "./calculadora.css";

function calculadora(){
    return(
        <div className="home">
        <div className='calculadora'>
            <input type="text" id="display" value="0" readOnly/>
            <div className="botoes">
                <div className="btn-Top">
                    <button className="botao" id="btn-clear">C</button>
                    <button className="botao" id="btn-backspace">&larr;</button>
                </div>    
                <div className="btn-Middle">        
                    <div className='btn-group'>
                        <ul className='numeros'>
                            <li id="btn-9">9</li>
                            <li id="btn-8">8</li>
                            <li id="btn-7">7</li>
                            <li className='operadores' id="btn-divide">&divide;</li>

                            <li id="btn-6">6</li>
                            <li id="btn-5">5</li>
                            <li id="btn-4">4</li>
                            <li className='operadores' id="btn-multiply">&times;</li>

                            <li id="btn-3">3</li>
                            <li id="btn-2">2</li>
                            <li id="btn-1">1</li>
                            <li className='operadores' id="btn-subtract"> - </li>
                            
                            <li id="btn-0">0</li>                
                            <li className='operadores' id="btn-ponto">.</li>
                            <li className='operadores'id="btn-igual"> = </li>
                            <li className='operadores'id="btn-add"> + </li>

                        </ul>                            
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default calculadora;