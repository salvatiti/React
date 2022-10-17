import { getHeroeById } from './bases/08-imporacion,exportacion' 

// const promesa = new Promise( (resolve, reject)  =>{

//     setTimeout( () => {
//        const heroe = getHeroeById(2);
//        resolve(heroe);
//     //    reject('No se pudo encontrar el heroe')
//     }, 2000)
// }) 

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(error => console.warn(error));

const getHeroebyIdAsync = (id ) => {

 return new Promise( (resolve, reject)  =>{

     setTimeout( () => {
        const heroe = getHeroeById( id );
        if(heroe){
            resolve(heroe);  
        }else{
            reject('No se puedo encontrar heroe')
        }
   //    reject('No se pudo encontrar el heroe')
     }, 2000)
 }) ;   

}

getHeroebyIdAsync(1)
.then(heroe => console.log('Heroe', heroe))
//.then( console.log) El Then coge el primer argumento que recibe
.catch(error => console.warn(error))
//.catch(console.warn) El Catch coge el primer argumento que recibe