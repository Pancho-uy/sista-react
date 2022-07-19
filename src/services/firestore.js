// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, getDocs, getDoc, doc, collection, query, where, Timestamp,addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
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

export async function traerProductos(){

  const itemColletion = collection(appFirestore, "catalogo");

  const itemsSnapshot = await getDocs(itemColletion);

  let respuesta = itemsSnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
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
    return respuesta;
}

 export async function creoOrdenDeCompra( dataOrder ){
  const orderColectionRef = collection(appFirestore, "orders");
  const dateTimestamp = Timestamp.now();

  const ordenDeCompra = {
    buyer: dataOrder.buyer,
    items: dataOrder.items,
    total: dataOrder.total,
    date: dateTimestamp 
  };
  const ordenCreada = await addDoc(orderColectionRef, ordenDeCompra);
return ordenCreada; 

}