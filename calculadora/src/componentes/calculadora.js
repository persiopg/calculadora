import React from "react";
import "./calculadora.css";



function calculadora(){
    let aux = 0;
    let memoria = 0;
    let ultimaOperacion = "";

    const soma = () => {
        if(ultimaOperacion === ""){
            memoria = 0;
        };
        aux = parseFloat(document.getElementById("display").value);
        memoria += aux;        
        aux=0;
        document.getElementById("display").value = null;
        ultimaOperacion = "somar";
    };
    const subtracao = () => {
        if(ultimaOperacion === ""){
            memoria = 0;
        }
        aux = parseFloat(document.getElementById("display").value);
        memoria -= -aux;
        document.getElementById("display").value = null;
        ultimaOperacion = "subtrair";
    };
    const multiplicacao = () => {
        if(ultimaOperacion === "escrevendo"){memoria=1;}
        if(ultimaOperacion === ""){
            memoria = 1;
        }
        aux = parseFloat(document.getElementById("display").value);
        memoria *= aux;
        document.getElementById("display").value = null;
        ultimaOperacion = "multiplicar";
    };
    const divisao = () => {
        if(ultimaOperacion === "escrevendo"){
            memoria=parseFloat(document.getElementById("display").value);
            document.getElementById("display").value = null;
            ultimaOperacion = "divide";
        } else{
            if(ultimaOperacion === ""){
                memoria = parseFloat(document.getElementById("display").value);
            }
            aux = parseFloat(document.getElementById("display").value);
            aux /= memoria;
            document.getElementById("display").value = null;
            ultimaOperacion = "divide";
        }
    };
    const igual = () => {
        if(ultimaOperacion !== ""){
            if(ultimaOperacion === "somar"){
                memoria += parseFloat(document.getElementById("display").value);
            }else if(ultimaOperacion === "subtrair"){
                memoria -= parseFloat(document.getElementById("display").value);
            }else if(ultimaOperacion === "multiplicar"){
                memoria *= parseFloat(document.getElementById("display").value);
            }else if(ultimaOperacion === "divide"){
                memoria /= parseFloat(document.getElementById("display").value);
            }
            ultimaOperacion = "segundaInteração";
        }
        document.getElementById("display").value = memoria.toFixed(2);
        ultimaOperacion = "";
    };
    const inverte = () => {
        aux = 0;
        aux = parseFloat(+document.getElementById("display").value);    
        aux = -aux;
        document.getElementById("display").value = aux;
    };
    const backspace = () => {
        aux = 0;
        aux = document.getElementById("display").value;
        aux = aux.substring(0,aux.length-1);
        document.getElementById("display").value = aux;
    }
    

    const btnLimpar = () => {
        memoria = 0;
        document.getElementById("display").value = null;
    };

    const btnSomar = () => { 
        soma();
    };
    const btnSubtrair = () => {
        subtracao();
    };
    const btnMultiplicar = () => {
        multiplicacao();
    };
    const btnDividir = () => {
        divisao();
    };
    const btnIgual = () => {
        igual();
    };
    const btnInverte = () => {
        inverte();
    };
    const btnBackspace = () => {
        backspace();
    };
    const btnPonto = () => {
        document.getElementById("display").value += ".";
    };

    const number = (e) =>{
        if(ultimaOperacion === ""){
            document.getElementById("display").value = null;
            ultimaOperacion="escrevendo";
        }
        document.getElementById("display").value += e.target.value;
    };

    return(
        <div className="home">
        <div className='calculadora'>
            <input type="text" id="display" placeholder="0" readOnly />
            <div className="botoes">
                <div className="btn-Top">
                    <button className="botao" onClick={btnLimpar} id="btn-clear">C</button>
                    <button className="botao" onClick={btnInverte} id="btn-inverte">+/-</button>
                    <button className="botao"  onClick={btnBackspace} id="btn-backspace">&larr;</button>
                </div>    
                <div className="btn-Middle">        
                    <div className='btn-group'>
                        <ul className='numeros'>
                            <li className='numero'><button onClick={number} value="9">9</button></li>
                            <li className='numero'><button onClick={number} value="8">8</button></li>
                            <li className='numero'><button onClick={number} value="7">7</button></li>
                            <li className='operadores'><button onClick={btnDividir}> &divide; </button></li>

                            <li className='numero'><button onClick={number} value="6">6</button></li>
                            <li className='numero'><button onClick={number} value="5">5</button></li>
                            <li className='numero'><button onClick={number} value="4">4</button></li>
                            <li className='operadores'><button onClick={btnMultiplicar}>x</button></li>

                            <li className='numero'><button onClick={number} value="3">3</button></li>
                            <li className='numero'><button onClick={number} value="2">2</button></li>
                            <li className='numero'><button onClick={number} value="1">1</button></li>
                            <li className='operadores'><button onClick={btnSubtrair}> - </button></li>
                            
                            <li className='numero'><button onClick={number} value="0">0</button></li>                
                            <li className='operadores'><button onClick={btnPonto}>.</button></li>
                            <li className='operadores'><button onClick={btnIgual}> = </button></li>
                            <li className='operadores'><button onClick={btnSomar}> + </button></li>

                        </ul>                            
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default calculadora;