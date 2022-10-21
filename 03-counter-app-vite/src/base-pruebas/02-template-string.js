

 export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Salva';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );