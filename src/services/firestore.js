// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, getDocs, setDoc, getDoc, doc, collection, query, where, Timestamp,addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1VCZhfAvImy-k9TXv6s5NoEmu6XNwg98",
  authDomain: "coderhousereact37070.firebaseapp.com",
  projectId: "coderhousereact37070",
  storageBucket: "coderhousereact37070.appspot.com",
  messagingSenderId: "281608547573",
  appId: "1:281608547573:web:3a8eec0d2a7f9ffa8da9bc",
  measurementId: "G-VR4B7R1JJZ"
};

// Inicializamos Firebase
const appFirebase = initializeApp(firebaseConfig);

// Inicializamos Firestore
const appFirestore = getFirestore(appFirebase);

// Testeamos la conexion con Firestore
export function testDatabase(){
  console.log(appFirestore);
}

export async function traerProductos(){

  const itemColletion = collection(appFirestore, "catalogo");

  const itemsSnapshot = await getDocs(itemColletion);

  let respuesta = itemsSnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  console.log(respuesta);
  return respuesta;
}

export async function traerUnProducto(itemId){
  const docref = doc(appFirestore, "catalogo", itemId);

  const docSnapshot = await getDoc(docref);

  return {
      id: docSnapshot.id,
      ...docSnapshot.data()
  };
}   

export async function traerProductosDeCategoria(catID){

  const itemColletion = collection(appFirestore, "catalogo");

  const q = query(itemColletion, where("category", "==", catID));
  const itemsSnapshot = await getDocs(q);
  let respuesta = itemsSnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      ID: doc.id
      
    }});
    console.table("RESPUESTA: ",respuesta);
    return respuesta;
}

export async function exportDataToFirestore(){
  const productos =[
{
        ID:0,
        name: "Mikrotik 951",
        price: "110.00",
        stock: 8,
        img: "https://res.cloudinary.com/dxgud4zt2/image/upload/v1654899168/sista/MK951_jxwx2v.jpg",
        category: "RoutersWIFI",
        description: "El RB951G-2HnD es un AP inalámbrico SOHO Gigabit con una CPU Atheros de nueva generación y más potencia de procesamiento. Tiene cinco puertos Gigabit Ethernet, un puerto USB 2.0 y un punto de acceso inalámbrico 802.11b/g/n de 2,4 GHz de alta potencia con antenas integradas. En comparación con el modelo anterior RB751G-2HnD, tiene una CPU de 600 MHz más potente (en lugar de 400 MHz) , más RAM: 128 MB en lugar de 64 MB, mismo factor de forma y precio. El dispositivo es muy pequeño y se verá bien en cualquier hogar u oficina, se proporcionan orificios de anclaje para montaje en pared. El paquete contiene RouterBOARD 951G-2HnD en una caja de plástico y adaptador de corriente."
    },
    {
        ID:1,
        name: "Mikrotik 750",
        price: 85.00,
        stock: 10,
        img: "https://res.cloudinary.com/dxgud4zt2/image/upload/v1654899168/sista/MK750_hkjdt4.jpg",
        category: "Routers",
        description: "El RB750GL es un pequeño enrutador SOHO en una caja de plástico blanca. Tiene cinco puertos Gigabit Ethernet independientes y funcionalidad de chip conmutador opcional para rendimiento Gigabit a velocidad de cable. Es probablemente el enrutador Gigabit compatible con MPLS más asequible del mercado y ahora es aún más asequible que antes. En comparación con el modelo anterior, el RB750GL tiene casi el mismo rendimiento, pero tiene un costo significativamente menor. Con su diseño compacto y apariencia limpia, encajará perfectamente en cualquier entorno SOHO. La caja contiene: RB750GL, estuche de plástico, adaptador de corriente"
    },
    {
        ID:2,
        name: "UniFi AP",
        price: 180.00,
        stock: 5,
        img: "https://res.cloudinary.com/dxgud4zt2/image/upload/v1655160792/sista/unifi_AP_pcfnmy.jpg ",
        category: "AP5Ghz",
        description: "El Access Point AC Long-Range (UAP AC LR) es un punto de acceso WiFi 802.11ac para interiores de alto rendimiento que utiliza la tecnología Wave 1 para alcanzar una tasa de rendimiento total de más de 1,2 Gbps con sus bandas de 5 y 2,4 GHz. El UAP AC LR también tiene un rango de transmisión impresionantemente largo de hasta 183 metros (600 pies), lo que le permite establecer y mantener una conectividad de calidad a mayores distancias. Este punto de acceso funciona con PoE 802.3af o PoE pasivo de 24 V y está equipado con (1) puerto GbE RJ45 para conectividad LAN de alta velocidad. El UAP AC LR se puede configurar en minutos y administrar completamente con la aplicación web o la aplicación móvil UniFi Network."
    },
    {
        ID:3,
        name: "Archer C20",
        price: 80.00,
        stock: 25,
        img: "https://res.cloudinary.com/dxgud4zt2/image/upload/c_scale,h_200,w_329/v1656866175/sista/Archer_C20_UN_3.0_590x443px-00_1490594464231e_oxv1qb.jpg",
        category: "RoutersWIFI",
        description: "El Archer C20 de TP-LINK viene con el estándar de próxima generación Wi-Fi - 802.11ac, compatible con 802.11n y 3 veces más rápido que las velocidades inalámbricas N. Con una mayor eficiencia energética y una seguridad robusta, el 802.11ac es la manera perfecta de acelerar una red doméstica multimedia y resolver la congestión que varios dispositivos puedan causar."
    },
    {
        ID:4,
        name: "Archer C80",
        price: 130.00,
        stock: 30,
        img: "https://res.cloudinary.com/dxgud4zt2/image/upload/c_scale,h_200,w_329/v1656876825/sista/1_large_1576202231392h_nij5rt.jpg",
        category: "RoutersWIFI",
        description: "Archer C80 entrega una WiFi de alta performance y económica con velocidades totales de hasta 1900 Mbps. Maneja tareas simples como enviar correos electrónicos o navegar por la web en la banda de 2.4 GHz y tareas intensivas de ancho de banda como juegos en línea o transmisión 4K / 8K UHD en la banda de 5 GHz, todo sin lag."
    },
    {
        ID:5,
        name: "PMP 450",
        price: 1080.00,
        stock: 15,
        img: "https://res.cloudinary.com/dxgud4zt2/image/upload/c_scale,h_200/v1656877400/sista/450i_Sector_HERO_gtez6g.png",
        category: "SolucionRF",
        description: "La plataforma 450 líder en la industria de Cambium Networks incluye las nuevas radios PMP 450i y PTP 450i. La plataforma de productos de punto de acceso PMP 450i es la solución de banda ancha inalámbrica de grado industrial más escalable disponible."
    },    
    {
        ID:6,
        name: "Access Point AC Mesh",
        price: 280.00,
        stock: 20,
        img: "https://res.cloudinary.com/dxgud4zt2/image/upload/c_scale,h_200/v1656879050/sista/UAP-AC-M_Front-2_grande_qtr1v7.webp",
        category: "AP5Ghz",
        description: "El punto de acceso AC Mesh (UAP AC Mesh) es un punto de acceso Wi-Fi 802.11ac de alto rendimiento, listo para exteriores, de doble banda que puede alcanzar una tasa de rendimiento agregado de más de 1,1 Gbps con sus bandas de 5 GHz y 2,4 GHz. El UAP AC Mesh cuenta con dos antenas WIFi omnidireccionales (2x2 MIMO) para brindar una cobertura inalámbrica robusta y extensa de 360°, así como (2) conectores RP-SMA que se pueden usar junto con las antenas para dar forma a un patrón personalizado. Este punto de acceso se alimenta con PoE 802.3af o PoE pasivo de 24 V y está equipado con (1) puerto GbE RJ45 para conectividad LAN de alta velocidad. UAP AC Mesh se puede configurar en minutos y administrar completamente con la aplicación web o la aplicación móvil UniFi Network."
    },
    {
        ID:7,
        name: "Puente airFiber de 24 GHz",
        price: 4280.00,
        stock: 3,
        img: "https://res.cloudinary.com/dxgud4zt2/image/upload/c_scale,h_200/v1656879651/sista/airfiber_af24_right_angle_with_shadow_reflection_1024x1024_1_jb6pyj.webp",
        category: "AirFiber",
        description: "Tecnología inalámbrica revolucionaria. Presentamos airFiber, una radio punto a punto de 24 GHz verdaderamente revolucionaria de Ubiquiti. AirFiber, alojado en un factor de forma compacto y altamente eficiente, ofrece un rendimiento revolucionario de más de 1,4 Gbps, un rendimiento agregado y un alcance de más de 13 km. airFiber marca el comienzo de una nueva era en tecnología de backhaul de clase portadora que revoluciona los precios."
    }
];

  const itemColletion = collection(appFirestore, "articulos");
  productos.forEach( item => {
    const newDoc = doc(itemColletion,item);      
    setDoc(newDoc, item).then( res =>{
      console.log("Documento guardado:", newDoc.id )
    })  
    .catch( (error=> console.log("error obteniendo los datos: ", error))        
    )  
  })
}

export async function creoOrdenDeCompra( dataOrder ){
  /* seguir en 1h.12min de la clase Firebase II */ 

 /*  const orderColectionRef = collection(appFirestore, "orders");
  const dateTimestamp = Timestamp.now();

  const dataOrderWithDate = {
    buyer: dataOrder.buyer,
    items: dataOrder.items,
    total: dataOrder.total,
    date: dateTimestamp 
  };
  console.log("--->",dataOrderWithDate);
  const orderCreated = await addDoc(orderColectionRef, dataOrderWithDate);
  return orderCreated; */
  console.log("VENIMOS BIEN...");
} 