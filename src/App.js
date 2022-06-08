import React, { useState } from "react";
import NavBar from './components/NavBar';
import Saludo from './components/ElSaludo';
import BotonCompra from './components/ItemCount';

export default function App() {
  return (
  <>
    <NavBar/>
    <Saludo/>
    <BotonCompra stock={10} inicio={1}/>
  </>
  );
}

