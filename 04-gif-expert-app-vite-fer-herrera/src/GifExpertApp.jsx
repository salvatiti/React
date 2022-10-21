import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Toni el Rahaoh', 'Diego el Ofisinas']);

    const onAddCategory = ( ) => {
      setcategories([...categories, 'saaa']);
      console.log('uwu')
    }

  return (
    <> 
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        {/* Listado de Gif */}
        <button onClick={onAddCategory}> Agregar </button>
        <ol>
            {
            categories.map( category => {
               return <li key={ category }>{category}</li>;
            })
            }
         
        </ol>
            {/* Gif Items */}


    </>
  )
}
