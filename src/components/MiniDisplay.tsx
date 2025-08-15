"use client";

import { Delete, Equal, LucideMinusSquare, Plus, X } from "lucide-react";
import { useState } from "react";

export default function MiniDisplay() {
  const [display, setDisplay] = useState("");

  function ApagarUltimo() {
    setDisplay(display.slice(0, -1));
  }

  if (display.length > 12) {
    setDisplay(display.slice(0, 12));
  }

  
  
  function sun ()  {
      const values = display.split('+')
      
      const result =values.reduce(
          (acumulador, valoratual) => acumulador + Number(valoratual),0
        )
        setDisplay(String(result))
        
        
    }
    
    
      const subtraction = () => {
        const values = display.split("-") //"55+67" -> ["1", "1"]
        const numberValues = values.map((value)=>Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora - valorAtual
            
        )
        setDisplay(String(result))
    }


    const product = () => {
        const values = display.split("x") 
        const numberValues = values.map((value)=>Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora * valorAtual
            
        )
        setDisplay(String(result))
    }


     const calculate = () => {
        if(display.includes("+")){
            sun()
        } else if(display.includes("-")){
            subtraction()
        } else if(display.includes("x")) {
            product()
        }
    }




  return (
    // display
    <div className="flex flex-col items-center mt-10">


      <div className="border border-gray-400 rounded p-4 w-40 text-center text-xl h-10 flex justify-center items-center ">
        {display}
      </div>


      {/* teclado */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 w-40 h-40 ">
        <button onClick={() => {
            setDisplay(display + "0");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          0
        </button>
        <button
          onClick={() => {
            setDisplay(display + "1");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          1
        </button>
        <button
          onClick={() => {
            setDisplay(display + "2");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          2
        </button>
        <button
          onClick={() => {
            setDisplay(display + "3");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          3
        </button>
        <button
          onClick={() => {
            setDisplay(display + "4");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          4
        </button>
        <button
          onClick={() => {
            setDisplay(display + "5");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          5
        </button>
        <button
          onClick={() => {
            setDisplay(display + "6");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          6
        </button>
        <button
          onClick={() => {
            setDisplay(display + "7");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          7
        </button>
        <button
          onClick={() => {
            setDisplay(display + "8");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          8
        </button>
        <button
          onClick={() => {
            setDisplay(display + "9");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          9
        </button>
        <button
          onClick={() => {
            setDisplay(display + "+");
          }}
          className="bg-green-300 p-2 rounded flex justify-center items-center"
        >
          <Plus />
        </button>

         <button
          onClick={() => {
            setDisplay(display + "-");
          }}
          className="bg-yellow-300 p-2 rounded flex justify-center items-center"
        >
          -
        </button>


        <button
          onClick={() => {
            setDisplay(display + "x");
          }}
          className="bg-yellow-300 p-2 rounded flex justify-center items-center"
        >
          <X/>
        </button>

        <button
          onClick={() => {calculate()}}
          className="bg-gray-300 p-2 rounded flex justify-center items-center"
        >
          <Equal />
        </button>

        <button
          onClick={ApagarUltimo}
          className="bg-red-600 p-2 rounded flex justify-center items-center "
        >
          <Delete />
        </button>

        <button
          onClick={() => {
            setDisplay("");
          }}
          className="bg-red-300 p-2 rounded col-span-3 "
        >
          CE
        </button>


        
      </div>
    </div>
  );
}
