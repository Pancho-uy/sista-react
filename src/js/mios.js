const valorIVA=0.22;
const pais = 'es-UY';
let procesar, elpdf;
let lasCarillas=pedido=paginas=0;
let costoColor=25;
let costoByN=5;
let costoPloteo=250;
let costoEr125=120;
let costoEr370=150;
let costoCarpeta=500;
let carritodecompras=lineas=[];
let lineaOT=0;
let auxiliar=nombrePDF="";
let A0=A1=A2=A3=A4=A5=A6=A7=A8=A9=A10=0;
let unitarioI=unitarioT=0;
let total=impresion=terminacion=totalLinea=subtotal=iva=0;
let ruloPlastico=ruloMetalico=carpetaPlanos=sinTerminacion=false;
let byn=color=ploteos=false;
let TICreado=TERCreado=false;

let estado = {
  pdf: null,
  currentPage: 1,
  zoom: 1
}

// Desestructuracion del objeto estado
const {archivoPDF: pdf, pagActual:currenPage, elZoom:zoom} = estado;


class lineas_orden
{
      constructor(ID, archivo, carillas, tipoimp, unitarioI, termina, unitarioT) {
        this.ID=ID;
        this.archivo  = archivo;
        this.carillas = carillas;
        this.tipoimp = tipoimp;
        this.unitarioI = unitarioI;
        this.termina = termina;
        this.unitarioT=unitarioT;
        this.neto= ((this.unitarioI*this.carillas)+this.unitarioT)/1.22;
        this.ivalinea= this.neto*valorIVA;
        this.total= this.neto+this.ivalinea;
      }
}


async function suboarchivo(subirEste) 
{
/*   let aSubir = new FormData(); 
  console.log(aSubir);
  formData.append("file", subirEste);
  await fetch('http://www.cilbeti.com.uy/secciones', { 
    method: "POST", 
    body: aSubir
  });  */
  swal.fire('¡Archivo Subido con Éxito!');
}

//localStorage.clear();
pedeefes();

function pedeefes()
{
  const contPDFs = document.getElementById("captPDF");
  let seccion = document.createElement("div");
  seccion.innerHTML =`<div class="card" id="tomoPDF">
                        <img src="../img/upload-store.svg" width="45%" height="45%" class="img-subir" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Suba el archivo a presupuestar</h5>
                          <p class="card-text">El archivo será examinado para determinar el número de carillas a imprimir y poder ser presupuestado.</p>
                          <section>
                            <form id="formulario">
                              <br>
                              <br>
                              <br>
                              <br>
                              <input class= "btn btn-primary" type="file" name="PDFparaSubir" id="PDFprocesar" accept=".pdf" onchange="return tipoDeImp();"/>
                            </form>
                          </section>
                        </div>
                      </div>`;
  contPDFs.appendChild(seccion);
}

function datosPDF()
{
  nombrePDF='';
  nombrePDF=document.getElementById('PDFprocesar').files[0].name;
  const input = document.getElementById('PDFprocesar');
    input.files && input.files[0] ? procesar=input.files[0].name : alert("ERROR, No hay archivo para procesar.");
      elpdf=pdfjsLib.getDocument(procesar);
      elpdf.promise.then(function(pdf){
          archivoPDF=pdf;
          // console.log(estado.pdf);
          carillas=archivoPDF._pdfInfo.numPages;
          //console.log(nombrePDF);
          document.getElementById("carillas").innerHTML = "El PDF contiene "+carillas+" carillas.";
      });
      return nombrePDF;
}

function tipoDeImp()
{

  suboarchivo(datosPDF());
  contTipoImp = document.getElementById("tipoImpresion");
  if (TICreado)
  {
    contTipoImp.style.display="block"
  }
  else
  {
    let seccion=document.createElement("div");
    seccion.innerHTML =`<div class="card">
                          <img src="../img/Fotocopiadora-09.gif" width="60%" height="50%" class="img-modoImp" alt="...">
                            <h5 class="card-title">Método de impresión</h5>
                            <p class="card-text">Seleccione el modo de impresión.</p>
                            <h5 id="carillas">CALCULANDO CARILLAS...</h5>
                            <p id="costoImp">.</p>
                            <input class= "btn btn-primary" type="submit" value="Color" name="impColor" id="aColor" onclick="return precioColor();"/>
                            <input class= "btn btn-primary" type="submit" value="Blanco y Negro" name="impByN" id="enByN" onclick="return precioByN();"/>
                            <input class= "btn btn-primary" type="submit" value="Ploteo" name="ploteo" id="planos" onclick="return precioPloteo();"/>
                            <input class= "btn btn-outline-dark" type="submit" value="Terminaciones" name="siguiente" id="siguiente" onclick="return terminaciones();"/>
                        </div>`;
    contTipoImp.appendChild(seccion);
    TICreado=true;
  }
}

async function terminaciones(){
const contTipoTerm = document.getElementById("tipoTerminacion")
if (TERCreado)
  {
    contTipoTerm.style.display="block";
  }
else
  {
    let seccion=document.createElement("div");
    seccion.innerHTML =`<div class="card ">
                          <img src="../img/Encuadernacion_2.jpg" width="50%" height="45%" class="img-subir" alt="...">
                          <div class="card-body">
                              <br>
                              <h5 class="card-title">Terminaciones</h5>
                              <p class="card-text">Seleccione la Terminación</p>
                              <section class="terminaciones">
                                <label>
                                  <input type="radio" id="er125"    name="encuadernado" value="" onclick="return precioEr125();">
                                  Encuadernacion rulo plástico
                                </label>
                                <label>
                                  <input type="radio" id="er370"    name="encuadernado" value="" onclick="return precioEr370();">
                                  Encuadernacion rulo metálico
                                </label>
                                <br>
                                <label>
                                  <input type="radio" id="carpeta"  name="encuadernado" value="" onclick="return precioCarpeta();">
                                  Encuadernación de planos
                                </label>
                                <br>
                                <label>
                                <input type="radio" id="sinter"  name="encuadernado" value="" onclick="return precioSin();">
                                Sin terminacion
                              </label>
                              <br>
                                <br>
                                <p id="termina"></p>
                                <br>
                              </section>
                              <input class="btn btn-primary" type="submit" value="Agregar" name="agrega" id="bt-agrego"  onclick="return agregoLineas();"/>
                            </div>
                        </div>`
    contTipoTerm.appendChild(seccion);
    TERCreado=true;
  }
}


function precioColor()
{
  let precio = numeral(carillas*costoColor).format('0,0.00');
  document.getElementById("costoImp").innerHTML ="Costo de impresión: UYU "+ precio +" IVA incl. (COLOR)";
  impresion=carillas*costoColor;
  color=true;
  byn=ploteos=false;
}

function precioByN()
{
  let precio = numeral(carillas*costoByN).format('0,0.00')
  document.getElementById("costoImp").innerHTML ="Costo de impresión: UYU "+ precio+" IVA incl. (B y N)";
  impresion=carillas*costoByN;
  byn=true;
  color=ploteos=false;
}

function precioPloteo()
{
  let precio = numeral(carillas*costoPloteo).format('0,0.00')
  document.getElementById("costoImp").innerHTML ="Costo de impresión: UYU "+ precio+" IVA incl. (Ploteo)";
  impresion=carillas*costoPloteo;
  ploteos=true;
  byn=color=false;

}

function precioEr125()
{
  let precio = numeral(costoEr125).format('0,0.00');
  document.getElementById("termina").innerHTML ="Costo: UYU "+ (precio)+" IVA incl.";
  ruloPlastico=true;
  ruloMetalico=carpetaPlanos=sinTerminacion=false;
  terminacion=costoEr125;
}

function precioEr370()
{
  let precio = numeral(costoEr370).format('0,0.00');
  document.getElementById("termina").innerHTML ="Costo: UYU "+ (precio)+" IVA incl.";
  ruloMetalico=true;
  ruloPlastico=carpetaPlanos=sinTerminacion=false;
  terminacion=costoEr370;
}

function precioCarpeta()
{
  let precio = numeral(costoCarpeta).format('0,0.00');
  document.getElementById("termina").innerHTML ="Costo: UYU "+ (precio)+" IVA incl.";
  carpetaPlanos=true;
  ruloPlastico=ruloMetalico=sinTerminacion=false;
  terminacion=costoCarpeta;
}

function precioSin()
{

  document.getElementById("termina").innerHTML ="Costo: UYU 0,00";
  carpetaPlanos=ruloPlastico=ruloMetalico=false;
  sinTerminacion=true;
  terminacion=0;
}

function agregoLineas()
{
  if (color)   {
    tipoimp="COLOR";
    unitarioI=numeral(costoColor).format('0,0.00');}

  if (byn)  {
     tipoimp="ByN";
     unitarioI=costoByN;}

  if (ploteos)  {
    tipoimp="PLOTEOS";
    unitarioI=costoPloteo;}

  if (ruloPlastico) {
    termina="R. PLASTICO  .";
      unitarioT=costoEr125;}

  if (ruloMetalico) {
    termina="R. METALICO  .";
    unitarioT=costoEr370;}

  if (carpetaPlanos)  {
      termina="CARPETA PLANOS";
    unitarioT=costoCarpeta;}

  if (sinTerminacion)  {
      termina="SIN TERMINAC.";
      unitarioT=0;}

  lineaOT++;
  let linstock=new lineas_orden(lineaOT,nombrePDF,carillas,tipoimp,unitarioI,termina,unitarioT);
  let totalLineasFactura=localStorage.setItem(1,lineaOT);
  // lineas.push(linstock);
  
  // const linsubtotal=(parseInt(linstock.unitarioI)*parseInt(linstock.carillas))+parseInt(unitarioT)

  const grabo="Se agregó este item a la orden de compra\n\nArchivo:  "+
  linstock.archivo+"\nCarillas: "+
  linstock.carillas+"\nImpresion: "+
  linstock.tipoimp+"\nTerminacion: "+
  linstock.termina+"\nSubTotal: UYU "+
  numeral(linstock.neto).format('0,0.00')+"\nIVA UYU "+
  numeral(linstock.ivalinea).format('0,0.00')+"\nTOTAL UYU "+
  numeral(linstock.total).format('0,0.00');

  swal.fire(grabo);
  sessionStorage.setItem(lineaOT,JSON.stringify(linstock));
  console.log(lineaOT,linstock.archivo);
  contTipoImp = document.getElementById("tipoImpresion")
  contTipoImp.style.display = "none";
  contTipoImp = document.getElementById("tipoTerminacion")
  contTipoImp.style.display = "none";
}