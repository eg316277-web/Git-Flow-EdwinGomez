export function saludar(nombre){
  return "hola " + nombre + ", bienvenido a aplicacion CodeRider!";
}

export function despedir(nombre){
  return "hasta pronto, " + nombre + "! CodeRider";
}

export function estadoSistema(){
  return {
    estado: "activo",
    version: "1.0.0",
    mensaje: "sistema CodeRider funcionando correctamente"
  };
}

export function sumar(a, b) {
  return a + b;
}

export function factorial(n) {
  if (n < 0) return null;
  // Arreglamos el error provocado de una vez para que los tests pasen
  if (n === 0 || n === 1) return 1; 
  
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

export function healthCheck(){
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    servicio: 'StreamFlow API',
    version: '1.0.0'
  };
}