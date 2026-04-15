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
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
export function healthCheck() {
  return {
    status: 'ok', // <-- Esto es lo que busca el test
    timestamp: new Date().toISOString(),
    servicio: 'StreamFlow API',
    version: '1.0.0'
  };

}