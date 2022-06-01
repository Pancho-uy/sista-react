// creo lineas
let totalFactura=0;
let itemsFactura=localStorage.getItem(1,'lineasOT.value');
let lineasAmostrar=[];
for (let lineas=1;lineas<=itemsFactura;lineas++)
  lineasAmostrar.push(JSON.parse(sessionStorage.getItem(lineas)));

/* console.log(lineasAmostrar); */
if (itemsFactura<=0){
  Swal.fire({
    title: 'ATENCIÓN',
    text: "¡El Presupuesto esta VACÍO!",
    icon: 'error',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Volver'
  }).then((result) => {
    if (result.isConfirmed) {
      history.go(-1);
    }
  })
 }
function espacios(cant){
let ret="";
  for (let e=1;e<=cant;e++)
     ret=ret+`&nbsp`;
  return ret;
}
emitoOrden();

function emitoOrden(){
  //**** Genero número de presupuesto *********/
  let fecha=new Date();
  let hora= new Date();
  let anioDosDigitos= fecha.getFullYear().toString().substr(2,2);
  let mes=String(fecha.getMonth()+1).padStart(2, '0');
  let dia=String(fecha.getDate()).padStart(2, '0')
  let lahora=String(fecha.getHours()).padStart(2, '0');
  let losMinutos=String(hora.getMinutes()).padStart(2, '0');
  let numPres=anioDosDigitos+mes+dia;

  numPres=numPres+lahora+losMinutos+String(hora.getSeconds()); 
 //***************************************************************** */

  const archivo = document.getElementById("muestroArchivo");
  const carillas = document.getElementById("muestroCarillas");
  let titulo=document.getElementById("tituloFactura");
  titulo.innerHTML =`<h2> PRESUPUESTO # `+numPres+`</h2>`;
  let totalLineas=itemsFactura;
  let columna="";
  let elemento;
  let cabezal="Archivo"+espacios(45);
  let largo=0;
  let largoMax=0;
  let linea="";
  // creo cabezal

  //                                       CARILLAS       UNITARIO      IVA     SUBTOTAL";
  // Creo lineas de orden a mostrar
  cabezal=cabezal+"Carillas"+espacios(6)+"Unitario Imp."+espacios(3)+"TERMINACION"+espacios(7)+"COSTO TERM"+espacios(5)+"IVA"+espacios(7)+"SUBTOTAL";
  document.getElementById("cabezal").innerHTML=`<strong>`+cabezal+`</strong>`;
  for (let i=0;i<= totalLineas-1;i++){
    elemento=lineasAmostrar[i];
    let nomArch=elemento.archivo;
    let car=elemento.carillas;
    let pag="";
    let complementoI=0;
    let complementoT=0;
    let complementoIVA=0;
    let complementoNeto=0;
    largo=nomArch.length;
    if (largo > 55){
      nomArch=nomArch.slice(0,44);
      largo=42;
    }
  //  largo=50;
    largoMax= 55-largo;
    // agrego 0 a la izquierda del número de carillas en caso de ser menor a 10 y aseguro alineacion
    if (car<10){pag="0"+String(car)} 
    else {pag=String(car);};
    
    // Alineacion precio unitario TIPO DE IMPRESION de renglones de Orden de Compra
    complementoI = elemento.unitarioI < 10 ? 1 : 0; //Si tiene 1 cifra no agrego espacios en blanco
    complementoI = (elemento.unitarioI >= 10 && elemento.unitarioI <= 99) ? 0 : 1; // Si tiene 2 cifras agrego 1 espacio en blanco
    complementoI = elemento.unitarioI >= 100 ? -1 : 0; // Si tiene 3 cifras RESTO un espacio en blanco
    
    // Alineacion precio unitario TIPO DE TERMINACION de renglones de Orden de Compra
    complementoT = elemento.unitarioT < 10 ? 2 : 0;
    complementoT = elemento.unitarioT >= 10 && elemento.unitarioT <= 99 ? 0 : 1;
    complementoT = elemento.unitarioT >= 100 ? -1 : 0;

    // Alineacion del IVA de renglones de Orden de Compra
    complementoIVA = elemento.ivalinea < 10 ? 1 :0;
    complementoIVA = elemento.ivalinea >= 10 && elemento.ivalinea <= 99 ? 0 : 1;
    complementoIVA = elemento.ivalinea >= 100 ? -1 : 0;

    // Alineacion del NETO de renglones de Orden de Compra
    complementoNeto = elemento.neto < 10 ? 3 : 0;
    complementoNeto = elemento.neto >= 10 && elemento.neto <= 99 ? 0 : 1;
    complementoNeto = elemento.neto >= 100 ?  -1 : 0;

    // Creo fila
      columna=columna+nomArch+espacios(largoMax);   // Archivo seleccionado por el cliente
      columna=columna+pag+espacios(15+complementoI); // Cantidad de carillas a imprimir
      columna=columna+numeral(elemento.unitarioI).format('0,0.00')+espacios(5); // Costo unitario de impresión
      columna=columna+elemento.termina+espacios(8+complementoT);  // Tipo de Terminación
      columna=columna+numeral(elemento.unitarioT).format('0,0.00')+espacios(5+complementoIVA); // Costo unitario de terminación
      columna=columna+numeral(elemento.ivalinea).format('0,0.00')+espacios(5+complementoNeto); // IVA de la linea
      columna=columna+numeral(elemento.neto).format('0,0.00')+`<br>`
      linea=linea+i;
      totalFactura=totalFactura+(elemento.neto+elemento.ivalinea);
  }
  document.getElementById("linea1").innerHTML = columna;
  document.getElementById("totalFact").innerHTML ="Total a pagar : UYU"+ numeral(totalFactura).format('0,0.00');
  localStorage.clear();
  sessionStorage.clear();
}