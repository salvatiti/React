const persona ={
 nombre: 'Pepe',
 apellido: 'Viyuela',
 edad: 50,
 direccion: {
    ciudad: 'Tenerife',
    zip: 84293,
    lat: 4825.34244,
    long: 2942.13
 }
};

console.log(persona)

//const persona2 = persona; Hace Referencia a la memoria del objeto y no al objeto en si
const persona2 = {...persona}; //Desestructuracion, crea un nuevo objeto con los atributos del primero
persona2.nombre = 'Julian';
persona2.apellido = 'Barakaldo';


console.log(persona2)