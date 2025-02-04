//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Seleção de elementos do DOM
const inputName = document.getElementById("amigo")
const btnAdicionarAmigos =  document.getElementById("btnAdicionarAmigos")
const btnSortearAmigos = document.getElementById("sortearAmigos")
const addAmigos = document.getElementById("listaAmigos")
const resultadoAmigos = document.getElementById("resultado")

// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Evento para sortear um amigo
btnSortearAmigos.addEventListener("click", () => {
    if(listaAmigos.length < 2){
        alert("Adicione pelo menos dois amigos")
        return
    }

    let num = Math.floor(Math.random()* listaAmigos.length)
    exibirResultado(num)
})

// Evento para adicionar um amigo
btnAdicionarAmigos.addEventListener("click", () => {
    if (inputName.value.length < 3){
        inputName.value = ""
        alert("Por favor, insira ao menos o primeiro nome");
    } else if((inputName.value.trim()).length === 0){
        inputName.value = ""
        alert("Nome não pode ser vazio!!")
    }else{
        if(listaAmigos.includes(inputName.value)){
            inputName.value = ""
            alert("Este nome já foi adicionado.")
        } else{
            listaAmigos.push(inputName.value)
            inputName.value = ""
            atualizarLista()
        } 
    }
})

// Atualiza a lista de amigos na tela
function atualizarLista(){
    addAmigos.innerHTML = "";
    listaAmigos.forEach((value) => {
        const li = document.createElement("li")
        li.textContent = value
        addAmigos.appendChild(li)
    })
}

// Exibe o resultado do sorteio
function exibirResultado(n){
    addAmigos.innerHTML = ""
    const li = document.createElement("li")
    li.textContent = `${listaAmigos[n]}`
    resultadoAmigos.appendChild(li)
    setTimeout(() => {
        window.location.reload()
    }, 3000)
}
