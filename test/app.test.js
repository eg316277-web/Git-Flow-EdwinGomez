import {saludar, despedir, estadoSistema} from "../src/app.js"

function ejecutarPruebas(){
  let pasadas = 0;
  let fallidas = 0;

  const r1 = saludar("Rider");
  if (r1.includes("Rider")) {
    console.log("Test 1 pasado: funcion saludar en CodeRider es correcta");
    pasadas++;
  } else {
    console.log("Test 1 Fallido: ", r1);
    fallidas++;
  }

  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo"){
    console.log("Test 2 pasado: estadoSistema() funciona en CodeRider");
    pasadas++;
  } else {
    console.log("Test 2 fallido:", actualEstado.estado, "en CodeRider");
    fallidas++;
  }

  // Corrección en la concatenación de resultados
  console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");

  // Corrección: es "process" (con doble 's'), no "procces"
  if(fallidas > 0) process.exit(1);
}

ejecutarPruebas();