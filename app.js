const amigos = [];
let amigosRestantes = [];

const input = document.getElementById("amigo");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const botaoSortear = document.getElementById("botaoSortear");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteio = document.getElementById("resultado");

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const amigo = input.value.trim();

    if(!amigo) {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(amigo);
    amigosRestantes.push(amigo);

    atualizarLista();
    input.value = "";
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if(amigosRestantes.length === 0) {
        // Reinicia a lista quando todos os nomes foram sorteados
        amigosRestantes = [...amigos];
        alert("Todos os amigos foram sorteados! Reiniciando a lista.");
    }

    const indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
    const amigoSorteado = amigosRestantes[indiceAleatorio];

    // Remove o nome sorteado da lista de amigos restantes
    amigosRestantes.splice(indiceAleatorio, 1);

    resultadoSorteio.innerHTML = `Resultado do Sorteio: <strong>${amigoSorteado}<strong>`;
}

botaoAdicionar.addEventListener("click", adicionarAmigo);
botaoSortear.addEventListener("click", sortearAmigo);