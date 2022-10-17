const persona =  {
    nombre: 'Pepe',
    edad: 45,
    clave: 'Frutero',
}

//Se extrae del objeto el nombre y se le asigna nombre2. nombre sería not defined
// const {nombre:nombre2} = persona;
// console.log(nombre2)

const {nombre,edad,clave} = persona;
console.log(nombre,edad,clave)

//Si existe la propiedad en el objeto usa esa propiedad,
// si no la tiene usa la que le asignemos nosotros
const Context = ({clave,nombre,edad, rango = 'Melocotonero'}) => {
 
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:14.234,
            lng:242.144,
        }
        
    }
 //console.log(nombre,edad,rango);
};

//Desestructuracion anidada de objetos
const {nombreClave,anios,latlng:{lat,lng}} = Context(persona);
//const {lat,lng} = latlng;
console.log(nombreClave,anios)
console.log(lat,lng)