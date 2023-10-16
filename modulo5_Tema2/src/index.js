function componente(){
    const elemento = document.createElement('div');
    elemento.innerHTML = _.join(['Hola', 'Wepback'], ' ');
    return elemento;
}

document.body.appendChild(componente());