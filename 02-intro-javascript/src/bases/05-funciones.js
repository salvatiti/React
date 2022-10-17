const saludar = function (nombre){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => `Hola, ${nombre}`

console.log(saludar2('salva'))


const getUser = () =>{
    return{
       uid: '123',
       username: 'papito', 
    }
}

const user = getUser();
console.log(user);


//parentesis para decirle a JS que el return de la arrow function es un objeto
const getUser2 = () => 
    ({
       uid: '123',
       username: 'papito', 
    })

console.log(getUser2);

// function getUsuarioAactivo(nombre){
//     return{
//         uid:'ABDS234',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioAactivo('salva');
// console.log(usuarioActivo)

const getUsuarioActivo = (nombre) =>
({
    uid:'ADFSFDS',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Salva');
console.log(usuarioActivo)