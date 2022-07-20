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

Los datos estan almacenados en Firestore
  npm install --save firebase

Las imagenes del catalogo estan hosteadas en Cloudinary

El sitio se encuentra publicado en Netlify en la URL: https://brilliant-syrniki-3d3dd1.netlify.app/

El proyecto es una "tienda" online de dispositivos de red. 

Al entrar al sitio se renderiza la navbar (componente navbar.jsx) y el componente itemlistcontainer.jsx muestra el catalogo completo (sin filtrar), en la ruta "/" definida en app.js.

Una vez dentro, desde la navbar se puede ver el catalogo filtrado por categoria, para eso se llama al componente itemlistcontainer.jsx que dentro de un useEffect trae los productos segun la categoria pasada en el useParams() y las muestra usando el componente itemlist.jsx.

Si se clickea en la imagen de cada artículo el componente itemdetail.jsx despliega una card con el item del catalogo seleccionado y permite mediante el componente itemcount.jsx elegir la cantidad a comprar, enviarla al carrito e ir al mismo para finalizar la compra, quitar el item del carrito o seguir comprando, lo que nos vuelve al inicio.

En la navbar el componente cartwidget muestra el ícono del carrito de compras y la cantidad de unidades en el carrito. Al vaciar el carrito o si no se compró nada muestra solo el ícono.

Una vez agregado un item y si vamos al carrito, el componente carritodecompras.jsx despliega los items seleccionados con la cantidades a comprar de cada uno, nos permite remover el item deseado, finalizar la compra o vaciar el carrito. En caso de finalizar la compra hay un formulario (componente formUSR.jsx) que solicita datos de contacto del comprador (nombre, telefono e email) siendo obligatorios los campos nombre e email. Una vez enviado el form un alert nos indica la ID con la que se generó la orden de compra (que coincide con la ID del documento en firestore) y nos dice que se envirá un mail a la direccion ingresada para coordinar la entrega.

Dudas o consultas: pancho@cilbeti.com.uy






