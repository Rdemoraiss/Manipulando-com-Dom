// ==================================================
// // ==> SELECIONAR ELEMENTOS <==
// 1. Selecione o elemento <body> e armazene em uma variável
let body = document.body;  // Correção: 'document.body' e não 'Document.body'

// 2. Selecione todos os elementos <p> e armazene em uma variável
let paragrafos = document.getElementsByTagName("p");  // getElementsByTagName já retorna uma coleção de elementos

// 3. Selecione o elemento com id "meuId" (crie este elemento no HTML se necessário)
let elementoPorId = document.getElementById("meuId");

// ==================================================
// ==> CRIAR E ADICIONAR ELEMENTOS
// 4. Crie um novo elemento <h1>
let novoH1 = document.createElement("h1");

// 5. Defina o texto do h1 como "Minha Atividade DOM"
novoH1.textContent = "Minha atividade DOM";

// 6. Adicione o h1 ao body
body.appendChild(novoH1);

// ==================================================
// ==> MODIFICAR ESTILOS <==
// 7. Mude a cor de fundo do body para "lightblue"
body.style.backgroundColor = "lightblue";

// 8. Mude a cor do texto de todos os parágrafos para "darkgray"
for (let p of paragrafos) {
  p.style.color = "darkgray";
}

// ==================================================
// ==> MANIPULAR ATRIBUTOS <==
// 9. Adicione uma classe "destaque" ao elemento com id "meuId"
// Verifique se o elemento existe antes de tentar adicionar a classe
if (elementoPorId) {
  elementoPorId.classList.add("destaque");
}

// 10. Adicione um atributo "title" com valor "Elemento destacado" ao mesmo elemento
if (elementoPorId) {
  elementoPorId.setAttribute("title", "Elemento destacado");
}
