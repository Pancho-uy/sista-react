CURSO DE REACT.JS CODERHOUSE COMISIÓN 37070
AUTOR: Francisco Cilbeti  pancho@cilbeti.com.uy

Titulo: Tienda ONLINE de dispositivos de red

Pre-requisitos para el desarrollo:

Instalar NodeJs
  Descargarlo de https://nodejs.org/es/download/

Instalar React
  Una vez instalado el NodeJS, en la carpeta del proyecto instalar React
    npm install react

Instalar React-router-dom
  Para la navegacion dentro del sitio necesitaremos React-Router-DOM
    npm install reactrouter-dom

El proyecto consta e los siguientes componentes:

NavBar.jsx - Crea la barra de menú principal del sitio. Usa el componente MenuItem.jsx
Carrito.jsx - Es el cartwidget
ElSaludo.jsx - Despliega un texto donde se necesite usar como titulo de la sección, mensaje, etc
ItemListContainer.jsx - Trae los artículos de la BD y los filtra segun la categoría seleccionada o en caso de 
                        no seleccionar ninguna, trae todos los artículos. Usa los componentes ItemList.jsx e Item.jsx
                        Usa también el componente ItemCount.jsx para seleccionar la cantidad a comprar.
ItemDetailContainer.jsx - Muestra la descripcion, precio, etc del artículo seleccionado. 
                          Usa el componente ItemDetail.jsx






