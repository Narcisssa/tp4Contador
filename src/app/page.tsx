"use client"; 

import React, { useState, useEffect } from "react";
import { getNumber, updateNumber } from '../lib/supabaseClient';

export default function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    async function fetchNumber() {
      const numberDB = await getNumber();
      if (numberDB && numberDB.Number !== null) {
        const aux = parseInt(numberDB.Number.toString());
        setNumber(aux);
      } 
    }
    fetchNumber();
  }, []);

  const incrementar = async () => {
    const newNumber = number + 1;
    setNumber(newNumber);
    await updateNumber(newNumber);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="text-center font-sans">
        <h1 className="text-3xl mb-4">Trabajo Práctico 4 - App A</h1>
        <p className="text-3xl mb-4">Current number: {number}</p>
        <button className="text-white px-4 py-2 rounded bg-pink-300 hover:bg-pink-400" onClick={incrementar}>Count</button>
      </main>
    </div>
  );
  
};