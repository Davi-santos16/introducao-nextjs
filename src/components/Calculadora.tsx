"use client";

import { Delete } from "lucide-react";
import { useState } from "react";


export default function Calculadora() {
    const [display, setDisplay] = useState("");

    const apaga = () => {
        setDisplay(display.slice(0, -1));
    };

    if (display.length > 15){
        setDisplay(display.slice(0, 15))
    
    };

    function Somar ()  {
      const values = display.split('+')
      
      const result =values.reduce(
          (acumulador, valoratual) => acumulador + Number(valoratual),0
        )
        setDisplay(String(result))
    }

    function Subtrair(){
        const values = display.split("-") 
        const numberValues = values.map((value)=>Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora - valorAtual
            
        )
        setDisplay(String(result))
    }


    function Multiplicar(){

        const values = display.split("X") 
        const numberValues = values.map((value)=>Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora * valorAtual
            
        )
        setDisplay(String(result))

    }

    function Dividir(){
        const values = display.split("/") 

        const numberValues = values.map((value)=>Number(value))

        if(numberValues[0] === 0){
          setDisplay('0')
          return 0
        }
        
        if(numberValues.includes(0)){
          setDisplay('Divisao por 0 ')
          return
        }

        
        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora / valorAtual
            
        )
        setDisplay(String(result))

    }


    const calcular = () => {
        if(display.includes("+")){
            Somar()
        } else if(display.includes("-")){
            Subtrair()
        } else if(display.includes("X")) {
            Multiplicar()
        } else if(display.includes('/')){
            Dividir()
        }
  
    }




  return (
    <div className="flex flex-col justify-center  items-center mt-10 gap-5 p-2">
      {/* display */}
      <div className="border-gray-500 border rounded w-50 h-10 items-center justify-center flex text-xl">
        {display}
      </div>

      {/* teclado */}

      <div className="grid grid-cols-4 gap-2 w-50  ">
        <button
          onClick={() => {
            setDisplay(display + "9");
          }}
          className="bg-blue-400 p-2"
        >
          9
        </button>
        <button
          onClick={() => {
            setDisplay(display + "8");
          }}
          className="bg-blue-400 p-2"
        >
          8
        </button>
        <button
          onClick={() => {
            setDisplay(display + "7");
          }}
          className="bg-blue-400 p-2"
        >
          7
        </button>
        <button
          onClick={() => {
            setDisplay(display + "6");
          }}
          className="bg-blue-400 p-2"
        >
          6
        </button>
        <button
          onClick={() => {
            setDisplay(display + "5");
          }}
          className="bg-blue-400 p-2"
        >
          5
        </button>
        <button
          onClick={() => {
            setDisplay(display + "4");
          }}
          className="bg-blue-400 p-2"
        >
          4
        </button>
        <button
          onClick={() => {
            setDisplay(display + "3");
          }}
          className="bg-blue-400 p-2"
        >
          3
        </button>
        <button
          onClick={() => {
            setDisplay(display + "2");
          }}
          className="bg-blue-400 p-2"
        >
          2
        </button>
        <button
          onClick={() => {
            setDisplay(display + "1");
          }}
          className="bg-blue-400 p-2"
        >
          1
        </button>
        <button
          onClick={() => {
            setDisplay("");
          }}
          className="bg-blue-400 p-2"
        >
          C
        </button>
        <button
          onClick={() => {
            setDisplay(display + "0");
          }}
          className="bg-blue-400 p-2"
        >
          0
        </button>
        <button
          onClick={apaga}
          className="bg-blue-400 p-2 flex items-center justify-center"
        >
          <Delete size={20} />
        </button>

        <button
          onClick={() => {
            setDisplay(display + "+");
          }}
          className="bg-blue-400 p-2 flex items-center justify-center"
        >
          +
        </button>

        <button
          onClick={() => {
            setDisplay(display + "-");
          }}
          className="bg-blue-400 p-2 flex items-center justify-center"
        >
          -
        </button>

         <button
          onClick={() => {
            setDisplay(display + "X");
          }}
          className="bg-blue-400 p-2 flex items-center justify-center"
        >
          x
        </button>

        <button
          onClick={() => {
            setDisplay(display + "/");
          }}
          className="bg-blue-400 p-2 flex items-center justify-center"
        >
          /
        </button>

         <button
          onClick={
            () => {calcular()}}
          className="bg-blue-400 p-2 flex items-center justify-center"
        >
          =
        </button>
      </div>
    </div>
  );
}
