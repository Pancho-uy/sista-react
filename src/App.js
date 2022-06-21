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
          {/* 1:08:50 del video de la clase seguir desde ahi */}
          <Route path="/detalle/:id" element={<ItemDetailContainer detalle="Detalle del producto"/>}/>
          <Route path="/category/:categoryID" element={<ItemDetailContainer detalle="Categoria de items"/>}/>
        </Routes>
    </BrowserRouter>
  </>
  );
}

