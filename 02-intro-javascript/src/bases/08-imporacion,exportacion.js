//Lo que hay entre {} son exportacions indivicuales que se encuentran dentro del mismo archivo
import  heroes, {owner} from "../data/heroes";

 export const getHeroeById = (id) => {
     return heroes.find( heroe => heroe.id === id) ;
 }

 //console.log(getHeroeById(2));


export const getHeroeByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner === owner) ;
}

//console.log(getHeroeByOwner('DC'));

