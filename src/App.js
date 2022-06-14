import React from "react";
import NavBar from './components/NavBar';
import Saludo from './components/ElSaludo';
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  return (
  <>
    <NavBar/>
    <Saludo/>
    <ItemListContainer/>
  </>
  );
}

