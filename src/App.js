import React from "react";
import NavBar from './components/NavBar';
import Saludo from './components/ElSaludo';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  return (
  <>
    <NavBar/>
    <Saludo/>
    <ItemListContainer/>
    <ItemDetailContainer itemID={1} detalle="Detalle del producto"/>
    <br></br>
    
  </>
  );
}

