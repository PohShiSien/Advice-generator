"use client";

import React, { useState } from "react";
import Image from "next/image";
import Advice from "@/components/Advice";

export default function App() {
  const [advice, setAdvice] = useState("Click die to get Advice");
  const [adviceId, setAdviceId] = useState('');
  const [clicked, setClicked] = useState(false);

  const fetchAdvice = async () => {
      try {
          const response = await fetch('https://api.adviceslip.com/advice');
          const data = await response.json();
          setAdvice(data.slip.advice);
          setAdviceId(data.slip.id);
          setClicked(true);
      } catch (error) {
          console.error('Error fetching advice:', error);
          setAdvice('Failed to fetch advice. Please try again.');
      }
  };

  return (
      <div className="flex items-center justify-center h-screen flex-col">
        <Advice advice={advice} adviceId={adviceId} clicked={clicked} />

        <button onClick={fetchAdvice} className="bg-neonGreen rounded-full m-negative w-12 h-12 flex items-center justify-center">
          <Image
             src='/images/icon-dice.svg'
             alt='dice-icon'
             width={20}
             height={20}
          />
         </button>
      </div>       
  )
}
