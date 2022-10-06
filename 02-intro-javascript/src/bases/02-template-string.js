const nombre = 'Salva';
const apellido = 'Blas';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

const nombreCompleto1 = `
${nombre} 
${apellido}
${ 1 + 1 }
`;

console.log(nombreCompleto);
console.log(nombreCompleto1)

function getSaludo(nombreCompleto){
    return `Hola  ${nombreCompleto}`;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)