import { saludar, despedir, estadoSistema, sumar, healthCheck, factorial } from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  // Test 1: Saludar
  const r1 = saludar("Rider");
  if (r1 && r1.includes("Rider")) {
    console.log("Test 1 pasado: funcion saludar en CodeRider es correcta");
    pasadas++;
  } else {
    console.log("Test 1 Fallido: ", r1);
    fallidas++;
  }

  // Test 2: Estado del Sistema
  const actualEstado = estadoSistema();
  if (actualEstado && actualEstado.estado === "activo") {
    console.log("Test 2 pasado: estadoSistema() funciona en CodeRider");
    pasadas++;
  } else {
    console.log("Test 2 fallido:", actualEstado ? actualEstado.estado : "null");
    fallidas++;
  }

  // Test 3: Suma
  const resultadoSuma = sumar(10, 5);
  if (resultadoSuma === 15) {
    console.log("Test 3 pasado: funcion sumar(10, 5) es correcta (15)");
    pasadas++;
  } else {
    console.log("Test 3 fallido: se esperaba 15, se obtuvo", resultadoSuma);
    fallidas++;
  }

  // Test 4: HealthCheck
  const health = healthCheck();
  if (health && health.status === 'ok') {
    console.log("Test 4 pasado: healthCheck funciona");
    pasadas++;
  } else {
    console.log("Test 4 fallido: se esperaba status 'ok', se obtuvo", health);
    fallidas++;
  }

  // Test 5: Factorial
  const resFactorial = factorial(5);
  if (resFactorial === 120) {
    console.log("Test 5 pasado: factorial(5) es correcto (120)");
    pasadas++;
  } else {
    console.log("Test 5 fallido: se esperaba 120, se obtuvo", resFactorial);
    fallidas++;
  }

  console.log("\n--- Resultados Finales ---");
  console.log(pasadas + " pasadas, " + fallidas + " fallidas");

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();