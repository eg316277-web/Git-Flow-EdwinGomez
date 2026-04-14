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

export function healthCheck(){
  return {
    status: `ok`,
    timestamp: new Date().toISOString(),
    servicio: `StreamFlow API`, 
    version:`1.0.0`
  };
}