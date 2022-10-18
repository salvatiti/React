import PropTypes from 'prop-types'


const saludar = () => {
 return 'Salva';
}

const persona = {
    name: 'Salva',
    age: 30
};

export const FirstApp = ({ title,subTitle, name }) => {
  

    return (
    //Para regresar un grupo de elementos que estan en el Funcional Component <>
    <>
    <code>{JSON.stringify(persona)}</code>
      <h1>{ saludar() }</h1>
     
      <h1>{title}</h1>
      <p>{subTitle }</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number //al no ser required no hace falta pasarlo en el main

}

FirstApp.defaultProps = {
  //Cuando no haya subTitle en este caso, por defecto pondra este
  title: 'No hay título',
  subTitle: 113,
  name:"Nombre"
}