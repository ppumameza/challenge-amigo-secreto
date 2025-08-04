// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


//Función para agregar los nombres de los amigos al array/lista
function agregarAmigo() {
  const textoAmigo = document.getElementById('amigo');
  const nombre = textoAmigo.value.trim();

  if (nombre === '') {
    alert('Por favor, escribe un nombre de un amigo');
    return;
  }

  // Verifica si el nombre ya está en el array
  const nombreExiste = amigos.some(n => n.toLowerCase() === nombre.toLowerCase());

  if (nombreExiste) {
    alert('Este nombre ya está en la lista');
    textoAmigo.value = '';//Limpiar caja de texto para ingresar nuevo nombre
    return;
  }

  amigos.push(nombre);
  mostrarAmigos();
  textoAmigo.value = '';
  textoAmigo.focus();
}

//Función que permite mostrar los nombre de los amigos en la lista/array
function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";//Limpiar contenido anterior

    amigos.forEach(function(amigo){
        let listarAmigos = document.createElement('li');
        listarAmigos.textContent = amigo;
        lista.appendChild(listarAmigos);
    });
}

//Función que permite realizar sorteo aleatorio de los amigos de la lista/array
function sortearAmigo (){
    let lista = document.getElementById('listaAmigos');
    let amigoSorteado = document.getElementById(resultado);

    if(amigos.length=== 0){
        alert('No hay amigos para sortear, agregue al menos un nombre');
        return
    }
    //Generar indíce aleatorio
    let aleatorio = Math.floor(Math.random()* amigos.length);

    //Optener el nombre del array/lista
    let nombreSorteado = amigos[aleatorio];

    //Mostrar al amigo secreto sorteado
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${nombreSorteado}</strong>`;

    //Limpiar la lista visual
    lista.innerHTML = '';

    //Vaciar el array/lista para reiniciar el sorteo
    amigo = [];

    document.getElementById('amigo').style.display = 'none';//Ocultar caja de texto
    document.getElementById('botonAgregar').style.display = 'none';//Ocultar botón agregar amigos
    document.getElementById('ingresarNombre').style.display = 'none';//Ocultar etiqueta H2
    
    botonSortear.textContent = 'Realizar nuevo sorteo';//Cambiar nombre del botón una vez realizado el sorteo

    //Reiniciar para mostrar todo para un nuevo sorteo
    botonSortear.onclick = function(){
        location.reload();
    };
}