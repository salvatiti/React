import React from 'react'; //Importacion React
import ReactDOM from 'react-dom/client'; //Herrmaienta para renderizar

function App() { //Componente inicial
    return (<h1>Hola Mundo!</h1>);
}

//Forma para renderizar el componente en el DOM
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);