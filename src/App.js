import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Route, Routes} from "react-router-dom"

export default function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer detalle="Detalle del producto"/>}/>
          <Route path="/categoria/:catID" element={<ItemListContainer detalle="Items por Categoría"/>}/>
        </Routes>
    </BrowserRouter>
  </>
  );
}

