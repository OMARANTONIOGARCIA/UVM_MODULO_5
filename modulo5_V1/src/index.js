import _ from 'lodash';
import './estilo.css';
import './estilo.scss';
import Imagen from './img.jpg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';

if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log("SW registrado", registration);
        }).catch( err => {
            console.log("SW no registrado", err)
        });
    });
}

function componente(){
    const elemento = document.createElement('div');
    elemento.innerHTML = _.join(['Hola', Datos[0][1]], ' ');
    /*elemento.classList.add('fondo');*/
    elemento.classList.add('fondo');

    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);

    console.log(Datos);
    return elemento;
}
console.log(yaml.first);
console.log(json5);


document.body.appendChild(componente());
/*document.body.classList.add('fondo');*/