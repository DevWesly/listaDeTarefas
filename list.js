let enterButton = document.getElementById("enter");
let lista = document.getElementById("ul");
let iten = document.getElementsByTagName("li")
let input = document.getElementById("userInput");
let divColunasTarefas = document.getElementById("colunasTarefas");
let todasTarefas = document.getElementsByClassName("divTarefas");

let botaoDelete = document.getElementsByClassName("btnDell");
let botaoEdit = document.getElementsByClassName("btnEdit");

let valorDigitado = input.value;


enterButton.addEventListener("click", () => {
    event.preventDefault();

    let valorDigitado = input.value;

    if (!valorDigitado) {
        return alert("Campo vazio")
    } else {
        valorDigitado = valorDigitado.toLowerCase();
        valorDigitado = valorDigitado[0].toUpperCase() + valorDigitado.slice(1);

        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = valorDigitado;


        let novaDiv = document.createElement("div");
        novaDiv.className = "divTarefas"    

        let delBotao = document.createElement("button");
        delBotao.className = "btnDell"
        delBotao.innerHTML = '<img src="delete.png">';


        let editBotao = document.createElement("button");
        editBotao.className = "btnEdit"
        editBotao.innerHTML = "<img src='pencil.png'>";

        novaDiv.appendChild(novaTarefa);
        let novaDivPai= document.createElement("div");
        novaDivPai.className = 'novaDivPai'

        novaDivPai.appendChild(novaDiv)
        novaDivPai.appendChild(delBotao);
        novaDivPai.appendChild(editBotao);


        divColunasTarefas.appendChild(novaDivPai);

        delBotao.onclick = function() {
            let confirm = window.confirm(`Deseja apagar a tarefa ${novaDiv.innerText} ?`);
            if(confirm){ novaDivPai.innerHTML = "";}
            
          };

          novaDiv.onclick = function(){
            novaDiv.classList.toggle("azul");
          }

          editBotao.onclick = ()=>{
            var novoConteudo = prompt("Qual nome você deseja colocar nesse tarefa?");
            if(novoConteudo == '') return alert("Campo vazio");

            novoConteudo = novoConteudo.toLowerCase();
            novoConteudo = novoConteudo[0].toUpperCase() + novoConteudo.slice(1);
            novaDiv.innerText = novoConteudo
          }

         input.value = '';



    }
});







input.addEventListener("keyup", () => {
    event.preventDefault();
    let valorDigitado = input.value;

    if (event.keyCode == 13) {

        if (!valorDigitado) {
            return alert("Você não digitou nada no enter")
        } else {
            valorDigitado = valorDigitado.toLowerCase();
            valorDigitado = valorDigitado[0].toUpperCase() + valorDigitado.slice(1);

            const novaTarefa = document.createElement("li");
            novaTarefa.textContent = valorDigitado;


            let novaDiv = document.createElement("div");
            novaDiv.className = "divTarefas"    

            let delBotao = document.createElement("button");
            delBotao.className = "btnDell"
            delBotao.innerHTML = "<img src='delete.png'>";


            let editBotao = document.createElement("button");
            editBotao.className = "btnEdit"
            editBotao.innerHTML = "<img src='pencil.png'>";

            novaDiv.appendChild(novaTarefa);
            let novaDivPai= document.createElement("div");
            novaDivPai.className = 'novaDivPai'

            novaDivPai.appendChild(novaDiv)
            novaDivPai.appendChild(delBotao);
            novaDivPai.appendChild(editBotao);


            divColunasTarefas.appendChild(novaDivPai);

            delBotao.onclick = function() {
                let confirm = window.confirm(`Deseja apagar a tarefa ${novaDiv.innerText} ?`);
                if(confirm){ novaDivPai.innerHTML = "";}
                
              };

              novaDiv.onclick = function(){
                novaDiv.classList.toggle("azul");
              }

              editBotao.onclick = ()=>{
                var novoConteudo = prompt("Qual nome você deseja colocar nesse tarefa?");
                if(novoConteudo == '') return alert("Campo vazio");

                novoConteudo = novoConteudo.toLowerCase();
                novoConteudo = novoConteudo[0].toUpperCase() + novoConteudo.slice(1);
                novaDiv.innerText = novoConteudo
              }

             input.value = '';



        }
    }
});





