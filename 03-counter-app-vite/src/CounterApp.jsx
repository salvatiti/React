import { useState } from 'react'
import PropTypes from 'prop-types'

//Cuando cambia el estado, el componente se vuelve a ejecutar
//Cada vez que llama al evento onclick se renderiza el componente
export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( value ); 

    // el value es el valor que va a tener el counter
    // el setCounter hace que cambie el valor
    const handleAdd = () => {
     /*setCounter(counter + 1)*/
     setCounter( (c) => c + 1)
     //el valor de retorno de esta funcion va a ser el nuevo valor del counter
    }

    const handleSubstract = () => {
        setCounter(counter -1)
    }

    const handleReset = () => {
        setCounter(value)
    }

  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>

    <button onClick={ handleAdd }> +1 </button>
    <button onClick={ handleSubstract }> -1 </button>
    <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired 
}