import { saludar, despedir, estadoSistema, sumar, healthCheck, factorial } from "../src/app.js";

function ejecutarPruebas() {
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
  if (actualEstado.estado === "activo") {
    console.log("Test 2 pasado: estadoSistema() funciona en CodeRider");
    pasadas++;
  } else {
    console.log("Test 2 fallido:", actualEstado.estado, "en CodeRider");
    fallidas++;
  }

  const resultadoSuma = sumar(10, 5);
  if (resultadoSuma === 15) {
    console.log("Test 3 pasado: funcion sumar(10, 5) es correcta (15)");
    pasadas++;
  } else {
    console.log("Test 3 fallido: se esperaba 15, se obtuvo", resultadoSuma);
    fallidas++;
  }

  const health = healthCheck();
  if (health.status === 'ok') {
    console.log("Test healthCheck pasado");
    pasadas++;
  } else {
    console.log("Test healthCheck fallido", health);
    fallidas++;
  }

  const fact5 = factorial(5);
  if (fact5 === 120) {
    console.log("Test factorial pasado: factorial(5) es 120");
    pasadas++;
  } else {
    console.log("Test factorial fallido: se esperaba 120, se obtuvo", fact5);
    fallidas++;
  }

  console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();