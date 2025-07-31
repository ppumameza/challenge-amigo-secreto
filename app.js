// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    let textoAmigo = document.getElementById('amigo');
    let nombre = textoAmigo.value.trim();

    if(nombre !==''){
        amigos.push(nombre);//agregar a la lista
        mostrarAmigos();//Actualizar la lista en pantalla
        textoAmigo.value = "";//Limpia el campo texto
    }else{
        alert('Por favor escriba el nombre de un amigo');
    }
}

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";//Limpiar contenido anterior

    amigos.forEach(function(amigo){
        let listarAmigos = document.createElement('li');
        listarAmigos.textContent = amigo;
        lista.appendChild(listarAmigos);
    });
}