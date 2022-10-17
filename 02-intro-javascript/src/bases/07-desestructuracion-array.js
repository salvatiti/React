

const personajes = ['Goku', 'Vegeta','Trunks'];

const [p1] = personajes;
const[, p2] = personajes; //ignora el primer elemento del array
const[, , p3] = personajes; 

console.log(p1);
console.log(p2);
console.log(p3);


const devuelveArray = () => { 
    return ['ABC',123];
 }

const[ letras,numeros ] = devuelveArray();
console.log(letras,numeros);

const estadoUsuario = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo') } ];
}

const [nombre, setNombre] = estadoUsuario('Goku');

console.log(nombre)
setNombre();