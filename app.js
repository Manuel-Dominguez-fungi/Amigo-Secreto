let amigosManuel = [];
let listaAmigosElement = document.getElementById("listaAmigos");
let resultadoElement = document.getElementById("resultado");

function agregarAmigo() {
  let inputField = document.getElementById("amigo");
  let nombreParticipante = inputField.value.trim();

  // Validar que el campo no esté vacío
  if (nombreParticipante === "") {
    alert("Ingresar nombre válido");
    return;
  }

  // Agregar el nombre al array de amigos
  amigosManuel.push(nombreParticipante);

  // Mostrar los nombres en la lista
  mostrarNombresEnLista();

  // Limpiar el campo de entrada
  inputField.value = "";
}

function mostrarNombresEnLista() {
  // Limpiar la lista antes de actualizarla
  listaAmigosElement.innerHTML = "";

  // Recorrer el array de amigos y agregar cada nombre a la lista
  for (let i = 0; i < amigosManuel.length; i++) {
    let liItem = document.createElement("li");
    liItem.textContent = amigosManuel[i];
    listaAmigosElement.appendChild(liItem);
  }
}

function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigosManuel.length === 0) {
    alert("No hay amigos disponibles para sortear.");
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigosManuel.length);

  // Obtener el nombre sorteado
  let nombreSorteado = amigosManuel[indiceAleatorio];

  // Mostrar el resultado
  resultadoElement.innerHTML = `<li>El amigo secreto es: ${nombreSorteado}`;
}
