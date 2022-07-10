import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Route, Routes} from "react-router-dom"
import CarritoDeCompras from './components/CarritoDeCompras '
import { CartProvider } from "./contexto/Contexto";


export default function App() {
  return (
  <CartProvider>
    <BrowserRouter>
      <React.StrictMode>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer detalle="Bienvenidos a la Tienda"/>}/>
            <Route path="/detalle/:id" element={<ItemDetailContainer detalle="Detalle del producto"/>}/>
            <Route path="/categoria/:catID" element={<ItemListContainer detalle="Items por Categoría"/>}/>
            <Route path="/carrito/" element={<CarritoDeCompras/>}/>
          </Routes>
        </React.StrictMode>
    </BrowserRouter>
  </CartProvider>
  );
}

