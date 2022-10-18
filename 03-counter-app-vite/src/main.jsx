import React from 'react'; //Importacion React
import ReactDOM from 'react-dom/client'; //Herrmaienta para renderizar
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import {App} from './HelloWorldApp'
import './styles.css';



//Forma para renderizar el componente en el DOM
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = {0}/>
        {/* <FirstApp title="Soy yo"  />  */}
        {/* subTitle:{123} {} Cuando no sea String*/}
    </React.StrictMode>
); 