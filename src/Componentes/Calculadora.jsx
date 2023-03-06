import React, { useState } from "react";
import "./Calculadora.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculadora() {
  const [num, setNum] = useState(0);
  const [numAnt, setNumAnt] = useState(0);
  const [operador, setOp] = useState();

  function inputNum(valor){
      var input = valor.target.value
      if(num===0){
        setNum(input);
      }else{
        setNum(num + input);
      }
  }

  function porcentagem(){
      setNum(num/100);
  }

  function operacao(valor){
    var op = valor.target.value;
    setOp(op)
    setNumAnt(num)
    setNum(0);
  }

  function inversaoSinal(){
      setNum(num * (-1));
  }

  function limpar(){
      setNum(0);
  }

  function calcular(){
    if(operador === '/'){
      setNum(parseFloat(numAnt)/parseFloat(num));

    }if(operador === '*'){
      setNum(parseFloat(numAnt)*parseFloat(num));
      
    }if(operador === '+'){
      setNum(parseFloat(numAnt)+ parseFloat(num));

    }if(operador === '-'){
      setNum(parseFloat(numAnt)-parseFloat(num));
      
    }
  }

  return (
    <div>
      <Box m={5} />
      <div>
        <Container maxWidth="xs">
          <div className="wrapper">
            <Box m={5} />
            <h1 className="resultado">{num}</h1>
            <>
              <button onClick={limpar}>AC</button>
              <button onClick={inversaoSinal}>+/-</button>
              <button onClick={porcentagem}>%</button>
              <button className="operador" onClick={operacao} value ="/">/</button>
              <button className="numero" onClick={inputNum} value = {7}>7</button>
              <button className="numero" onClick={inputNum} value = {8}>8</button>
              <button className="numero" onClick={inputNum} value = {9}>9</button>
              <button className="operador" onClick={operacao} value ="*">x</button>
              <button className="numero" onClick={inputNum} value = {4}>4</button>
              <button className="numero" onClick={inputNum} value = {5}>5</button>
              <button className="numero" onClick={inputNum} value = {6}>6</button>
              <button className="operador" onClick={operacao} value ="-">-</button>
              <button className="numero" onClick={inputNum} value = {1}>1</button>
              <button className="numero" onClick={inputNum} value = {2}>2</button>
              <button className="numero" onClick={inputNum} value = {3}>3</button>
              <button className="operador" onClick={operacao} value ="+">+</button>
              <button className="numero" onClick={inputNum} value = {0}>0</button>
              <button className="numero" onClick={inputNum} value = {"."}>,</button>
              <button className="numero" style={{ visibility: "hidden" }}>,</button>
              <button className="operador" onClick={calcular}>=</button>
            </>
          </div>
        </Container>
      </div>
    </div>
  );
}
