document.addEventListener('scroll', function() {
  const meusBotoes = document.getElementById('meusBotoes');
  const rect = meusBotoes.getBoundingClientRect();
  meusBotoes.style.backgroundPosition = `center ${window.scrollY - rect.top}px`;
});



// Array para armazenar referências aos botões criados
let botoesCriados = [];
// Array para armazenar referências aos elementos de áudio gerados dinamicamente
var audiosGerados = [];
// Adicione essa variável fora das funções
let audioEmExecucao = false; 
// Array para armazenar referências aos áudios em execução
let audiosEmExecucao = [];
// Array para armazenar referências aos áudios gerados para download
let audiosParaDownload = [];

// Array para armazenar referências aos textos de posição dos botões
let textosPosicao = [];
// Array para armazenar referências às quebras de linha
let quebrasDeLinha = [];

//#######################################  Dó  1  segundo
// Função para criar um novo botão e gerar um novo áudio
function criarBotao() {

 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao = document.createElement("span");
 textoPosicao.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao); // Adiciona o texto à página
 textosPosicao.push(textoPosicao); // Adiciona o texto ao array

  const novoBotao = document.createElement("button");
  novoBotao.textContent = "Dó - 1 seg.";
  novoBotao.dataset.tooltip = "Botão para ouvir e selecionar a nota Dó para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao.classList.add("botaoSom");
  // Adiciona um evento de clique ao botão
  novoBotao.addEventListener("click", function() {
      gerarNovoAudio();
  }); 

  
  const quebraDeLinha = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha); // Adiciona a quebra de linha ao array

}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio = document.createElement("audio");
  novoAudio.src = "public/Audio Piano/Piano_1_Segundo/1_Dó_261p63Hz_1seg.mp3";
  audiosGerados.push(novoAudio);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio), 1);
      audioEmExecucao = false;
  });
  novoAudio.play();
}
}       
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao2").addEventListener("click", criarBotao);


//#######################################  Dó  10  segundos
// Função para criar um novo botão e gerar um novo áudio
function criarBotao10seg() {

// Cria um novo elemento de texto para indicar a posição do botão
const textoPosicao10seg = document.createElement("span");
textoPosicao10seg.textContent = `Bloco ${botoesCriados.length+1} `;
textoPosicao10seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
document.getElementById("minhaDiv").appendChild(textoPosicao10seg); // Adiciona o texto à página
textosPosicao.push(textoPosicao10seg); // Adiciona o texto ao array


  const novoBotao10seg = document.createElement("button");
  novoBotao10seg.textContent = "Dó - 10 seg.";
  novoBotao10seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Dó para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao10seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao10seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao10seg.classList.add("botaoSom10seg");
  // Adiciona um evento de clique ao botão
  novoBotao10seg.addEventListener("click", function() {
      gerarNovoAudio10seg();
  }); 

  
  const quebraDeLinha10seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha10seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha10seg); // Adiciona a quebra de linha ao array
  
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio10seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio10seg = document.createElement("audio");
  novoAudio10seg.src = "public/Audio Piano/Piano_10_Segundos/1_Dó_261p63Hz.mp3";
  audiosGerados.push(novoAudio10seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio10seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio10seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio10seg), 1);
      audioEmExecucao = false;
  });
  novoAudio10seg.play();
}
}       
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao2p2").addEventListener("click", criarBotao10seg);


//#######################################  Dó  30  segundos
// Função para criar um novo botão e gerar um novo áudio
function criarBotao30seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao30seg = document.createElement("span");
 textoPosicao30seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao30seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao30seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao30seg); // Adiciona o texto ao array


  const novoBotao30seg = document.createElement("button");
  novoBotao30seg.textContent = "Dó - 30 seg.";
  novoBotao30seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Dó para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao30seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao30seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao30seg.classList.add("botaoSom30seg");
  // Adiciona um evento de clique ao botão
  novoBotao30seg.addEventListener("click", function() {
      gerarNovoAudio30seg();
  }); 

  
  const quebraDeLinha30seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha30seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha30seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio30seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio30seg = document.createElement("audio");
  novoAudio30seg.src = "public/Audio Piano/Piano_30_segundos/1_Dó 30 segundos.mp3";
  audiosGerados.push(novoAudio30seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio30seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio30seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio30seg), 1);
      audioEmExecucao = false;
  });
  novoAudio30seg.play();
}
}       
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao2p3").addEventListener("click", criarBotao30seg);



//############################################### Ré 1 segundo
// Função para criar um novo botão e gerar um novo áudio
function criarBotao2() {
  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao2 = document.createElement("span");
 textoPosicao2.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao2.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao2); // Adiciona o texto à página
 textosPosicao.push(textoPosicao2); // Adiciona o texto ao array


  const novoBotao2 = document.createElement("button");
  novoBotao2.textContent = "Ré - 1 seg.";
  novoBotao2.dataset.tooltip = "Botão para ouvir e selecionar a nota Ré para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao2);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao2); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao2.classList.add("botaoSom2");
  // Adiciona um evento de clique ao botão
  novoBotao2.addEventListener("click", function() {
      gerarNovoAudio2();
  }); 

  const quebraDeLinha2 = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha2); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha2); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio2() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio2 = document.createElement("audio");
  novoAudio2.src = "public/Audio Piano/Piano_1_Segundo/2_Ré_293p66Hz_1seg.mp3";
  audiosGerados.push(novoAudio2);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio2);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio2.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio2), 1);
      audioEmExecucao = false;
  });
  novoAudio2.play();
}       
}
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao3").addEventListener("click", criarBotao2);

//############################################### Ré 10 segundos
// Função para criar um novo botão e gerar um novo áudio
function criarBotao210seg() {


 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao210seg = document.createElement("span");
 textoPosicao210seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao210seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao210seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao210seg); // Adiciona o texto ao array

  const novoBotao210seg = document.createElement("button");
  novoBotao210seg.textContent = "Ré - 10 seg.";
  novoBotao210seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Ré para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao210seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao210seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao210seg.classList.add("botaoSom210seg");
  // Adiciona um evento de clique ao botão
  novoBotao210seg.addEventListener("click", function() {
      gerarNovoAudio210seg();
  }); 

  const quebraDeLinha210seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha210seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha210seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio210seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio210seg = document.createElement("audio");
  novoAudio210seg.src = "public/Audio Piano/Piano_10_Segundos/2_Ré_293p66Hz.mp3";
  audiosGerados.push(novoAudio210seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio210seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio210seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio210seg), 1);
      audioEmExecucao = false;
  });
  novoAudio210seg.play();
}       
}
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao3p2").addEventListener("click", criarBotao210seg);

//############################################### Ré 30 segundo
// Função para criar um novo botão e gerar um novo áudio
function criarBotao230seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao230seg = document.createElement("span");
 textoPosicao230seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao230seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao230seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao230seg); // Adiciona o texto ao array


  const novoBotao230seg = document.createElement("button");
  novoBotao230seg.textContent = "Ré - 30 seg.";
  novoBotao230seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Ré para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao230seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao230seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao230seg.classList.add("botaoSom230seg");
  // Adiciona um evento de clique ao botão
  novoBotao230seg.addEventListener("click", function() {
      gerarNovoAudio230seg();
  }); 

  const quebraDeLinha230seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha230seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha230seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio230seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio230seg = document.createElement("audio");
  novoAudio230seg.src = "public/Audio Piano/Piano_30_segundos/2_Re 30 segundos.mp3";
  audiosGerados.push(novoAudio230seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio230seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio230seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio230seg), 1);
      audioEmExecucao = false;
  });
  novoAudio230seg.play();
}       
}
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao3p3").addEventListener("click", criarBotao230seg);


//############################################### Mi 1 segundo
// Função para criar um novo botão e gerar um novo áudio
function criarBotao3() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao3 = document.createElement("span");
 textoPosicao3.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao3.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao3); // Adiciona o texto à página
 textosPosicao.push(textoPosicao3); // Adiciona o texto ao array


  const novoBotao3 = document.createElement("button");
  novoBotao3.textContent = "Mi - 1 seg.";
  novoBotao3.dataset.tooltip = "Botão para ouvir e selecionar a nota Mi para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao3);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao3); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao3.classList.add("botaoSom3");
  // Adiciona um evento de clique ao botão
  novoBotao3.addEventListener("click", function() {
      gerarNovoAudio3();
  }); 

  const quebraDeLinha3 = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha3); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha3); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio3() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio3 = document.createElement("audio");
  novoAudio3.src = "public/Audio Piano/Piano_1_Segundo/3_Mi_329p63Hz_1seg.mp3";
  audiosGerados.push(novoAudio3);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio3);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio3.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio3), 1);
      audioEmExecucao = false;
  });
  novoAudio3.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao4").addEventListener("click", criarBotao3);


//############################################### Mi 10 segundos
// Função para criar um novo botão e gerar um novo áudio
function criarBotao310seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao310seg = document.createElement("span");
 textoPosicao310seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao310seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao310seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao310seg); // Adiciona o texto ao array

  const novoBotao310seg = document.createElement("button");
  novoBotao310seg.textContent = "Mi - 10 seg.";
  novoBotao310seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Mi para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao310seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao310seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao310seg.classList.add("botaoSom310seg");
  // Adiciona um evento de clique ao botão
  novoBotao310seg.addEventListener("click", function() {
      gerarNovoAudio310seg();
  }); 

  const quebraDeLinha310seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha310seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha310seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio310seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio310seg = document.createElement("audio");
  novoAudio310seg.src = "public/Audio Piano/Piano_10_Segundos/3_Mi_329p63Hz.mp3";
  audiosGerados.push(novoAudio310seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio310seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio310seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio310seg), 1);
      audioEmExecucao = false;
  });
  novoAudio310seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao4p2").addEventListener("click", criarBotao310seg);

//############################################### Mi 30 segundos
// Função para criar um novo botão e gerar um novo áudio
function criarBotao330seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao330seg = document.createElement("span");
 textoPosicao330seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao330seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao330seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao330seg); // Adiciona o texto ao array


  const novoBotao330seg = document.createElement("button");
  novoBotao330seg.textContent = "Mi - 30 seg.";
  novoBotao330seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Mi para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao330seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao330seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao330seg.classList.add("botaoSom330seg");
  // Adiciona um evento de clique ao botão
  novoBotao330seg.addEventListener("click", function() {
      gerarNovoAudio330seg();
  }); 

  const quebraDeLinha330seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha330seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha330seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio330seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio330seg = document.createElement("audio");
  novoAudio330seg.src = "public/Audio Piano/Piano_10_Segundos/3_Mi_329p63Hz.mp3";
  audiosGerados.push(novoAudio330seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio330seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio330seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio330seg), 1);
      audioEmExecucao = false;
  });
  novoAudio330seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao4p3").addEventListener("click", criarBotao330seg);


//############################################### Fá 1 segundo
function criarBotao4() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao4 = document.createElement("span");
 textoPosicao4.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao4.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao4); // Adiciona o texto à página
 textosPosicao.push(textoPosicao4); // Adiciona o texto ao array

  const novoBotao4 = document.createElement("button");
  novoBotao4.textContent = "Fá - 1 seg.";
  novoBotao4.dataset.tooltip = "Botão para ouvir e selecionar a nota Fá para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao4);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao4); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao4.classList.add("botaoSom4");
  // Adiciona um evento de clique ao botão
  novoBotao4.addEventListener("click", function() {
      gerarNovoAudio4();
  }); 

  const quebraDeLinha4 = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha4); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha4); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio4() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio4 = document.createElement("audio");
  novoAudio4.src = "public/Audio Piano/Piano_1_Segundo/4_Fá_349p23Hz_1seg.mp3";
  audiosGerados.push(novoAudio4);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio4);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio4.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio4), 1);
      audioEmExecucao = false;
  });
  novoAudio4.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao5").addEventListener("click", criarBotao4);



//############################################### Fá 10 segundos
function criarBotao410seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao410seg = document.createElement("span");
 textoPosicao410seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao410seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao410seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao410seg); // Adiciona o texto ao array

  const novoBotao410seg = document.createElement("button");
  novoBotao410seg.textContent = "Fá - 10 seg.";
  novoBotao410seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Fá para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao410seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao410seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao410seg.classList.add("botaoSom410seg");
  // Adiciona um evento de clique ao botão
  novoBotao410seg.addEventListener("click", function() {
      gerarNovoAudio410seg();
  }); 

  const quebraDeLinha410seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha410seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha410seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio410seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio410seg = document.createElement("audio");
  novoAudio410seg.src = "public/Audio Piano/Piano_10_Segundos/4_Fá_349p23Hz.mp3";
  audiosGerados.push(novoAudio410seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio410seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio410seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio410seg), 1);
      audioEmExecucao = false;
  });
  novoAudio410seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao5p2").addEventListener("click", criarBotao410seg);



//############################################### Fá 30 segundos
function criarBotao430seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao430seg = document.createElement("span");
 textoPosicao430seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao430seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao430seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao430seg); // Adiciona o texto ao array

  const novoBotao430seg = document.createElement("button");
  novoBotao430seg.textContent = "Fá - 30 seg.";
  novoBotao430seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Fá para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao430seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao430seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao430seg.classList.add("botaoSom430seg");
  // Adiciona um evento de clique ao botão
  novoBotao430seg.addEventListener("click", function() {
      gerarNovoAudio430seg();
  }); 

  const quebraDeLinha430seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha430seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha430seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio430seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio430seg = document.createElement("audio");
  novoAudio430seg.src = "public/Audio Piano/Piano_30_segundos/4_Fa 30 segundos.mp3";
  audiosGerados.push(novoAudio430seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio430seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio430seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio430seg), 1);
      audioEmExecucao = false;
  });
  novoAudio430seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao5p3").addEventListener("click", criarBotao430seg);



//############################################### Sol 1 segundo
function criarBotao5() {

 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao5 = document.createElement("span");
 textoPosicao5.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao5.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao5); // Adiciona o texto à página
 textosPosicao.push(textoPosicao5); // Adiciona o texto ao array


  const novoBotao5 = document.createElement("button");
  novoBotao5.textContent = "Sol - 1 seg.";
  novoBotao5.dataset.tooltip = "Botão para ouvir e selecionar a nota Sol para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao5);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao5); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao5.classList.add("botaoSom5");
  // Adiciona um evento de clique ao botão
  novoBotao5.addEventListener("click", function() {
      gerarNovoAudio5();
  }); 

  const quebraDeLinha5 = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha5); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha5); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio5() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio5 = document.createElement("audio");
  novoAudio5.src = "public/Audio Piano/Piano_1_Segundo/5_Sol_392Hz_1seg.mp3";
  audiosGerados.push(novoAudio5);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio5);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio5.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio5), 1);
      audioEmExecucao = false;
  });
  novoAudio5.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao6").addEventListener("click", criarBotao5);


//############################################### Sol 10 segundos
function criarBotao510seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao510seg = document.createElement("span");
 textoPosicao510seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao510seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao510seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao510seg); // Adiciona o texto ao array

  const novoBotao510seg = document.createElement("button");
  novoBotao510seg.textContent = "Sol- 10 seg.";
  novoBotao510seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Sol para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao510seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao510seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao510seg.classList.add("botaoSom510seg");
  // Adiciona um evento de clique ao botão
  novoBotao510seg.addEventListener("click", function() {
      gerarNovoAudio510seg();
  }); 

  const quebraDeLinha510seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha510seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha510seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio510seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio510seg = document.createElement("audio");
  novoAudio510seg.src = "public/Audio Piano/Piano_10_Segundos/5_Sol_392Hz.mp3";
  audiosGerados.push(novoAudio510seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio510seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio510seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio510seg), 1);
      audioEmExecucao = false;
  });
  novoAudio510seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao6p2").addEventListener("click", criarBotao510seg);

//############################################### Sol 30 segundos
function criarBotao530seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao530seg = document.createElement("span");
 textoPosicao530seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao530seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao530seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao530seg); // Adiciona o texto ao array


  const novoBotao530seg = document.createElement("button");
  novoBotao530seg.textContent = "Sol-30 seg.";
  novoBotao530seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Sol para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao530seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao530seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao530seg.classList.add("botaoSom530seg");
  // Adiciona um evento de clique ao botão
  novoBotao530seg.addEventListener("click", function() {
      gerarNovoAudio530seg();
  }); 

  const quebraDeLinha530seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha530seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha530seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio530seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio530seg = document.createElement("audio");
  novoAudio530seg.src = "public/Audio Piano/Piano_30_segundos/5_Sol 30 segundos.mp3";
  audiosGerados.push(novoAudio530seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio530seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio530seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio530seg), 1);
      audioEmExecucao = false;
  });
  novoAudio530seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao6p3").addEventListener("click", criarBotao530seg);


//############################################### Lá 1 segundo
function criarBotao6() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao6 = document.createElement("span");
 textoPosicao6.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao6.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao6); // Adiciona o texto à página
 textosPosicao.push(textoPosicao6); // Adiciona o texto ao array


  const novoBotao6 = document.createElement("button");
  novoBotao6.textContent = "Lá - 1 seg.";
  novoBotao6.dataset.tooltip = "Botão para ouvir e selecionar a nota Lá para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao6);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao6); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao6.classList.add("botaoSom6");
  // Adiciona um evento de clique ao botão
  novoBotao6.addEventListener("click", function() {
      gerarNovoAudio6();
  }); 

  const quebraDeLinha6 = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha6); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha6); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio6() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio6 = document.createElement("audio");
  novoAudio6.src = "public/Audio Piano/Piano_1_Segundo/6_Lá_440Hz_1seg.mp3";
  audiosGerados.push(novoAudio6);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio6);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio6.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio6), 1);
      audioEmExecucao = false;
  });
  novoAudio6.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao7").addEventListener("click", criarBotao6);



//############################################### Lá 10 segundos
function criarBotao610seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao610seg = document.createElement("span");
 textoPosicao610seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao610seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao610seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao610seg); // Adiciona o texto ao array


  const novoBotao610seg = document.createElement("button");
  novoBotao610seg.textContent = "Lá - 10 seg.";
  novoBotao610seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Lá para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao610seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao610seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao610seg.classList.add("botaoSom610seg");
  // Adiciona um evento de clique ao botão
  novoBotao610seg.addEventListener("click", function() {
      gerarNovoAudio610seg();
  }); 
  const quebraDeLinha610seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha610seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha610seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio610seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio610seg = document.createElement("audio");
  novoAudio610seg.src = "public/Audio Piano/Piano_10_Segundos/6_Lá_440Hz.mp3";
  audiosGerados.push(novoAudio610seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio610seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio610seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio610seg), 1);
      audioEmExecucao = false;
  });
  novoAudio610seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao7p2").addEventListener("click", criarBotao610seg);

//############################################### Lá 30 segundos
function criarBotao630seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao630seg = document.createElement("span");
 textoPosicao630seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao630seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao630seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao630seg); // Adiciona o texto ao array

  const novoBotao630seg = document.createElement("button");
  novoBotao630seg.textContent = "Lá - 30 seg.";
  novoBotao630seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Lá para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao630seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao630seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao630seg.classList.add("botaoSom630seg");
  // Adiciona um evento de clique ao botão
  novoBotao630seg.addEventListener("click", function() {
      gerarNovoAudio630seg();
  }); 
  const quebraDeLinha630seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha630seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha630seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio630seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio630seg = document.createElement("audio");
  novoAudio630seg.src = "public/Audio Piano/Piano_30_segundos/6_La 30 segundos.mp3";
  audiosGerados.push(novoAudio630seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio630seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio630seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio630seg), 1);
      audioEmExecucao = false;
  });
  novoAudio630seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao7p3").addEventListener("click", criarBotao630seg);


//############################################### Si 1 segundo
function criarBotao7() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao7 = document.createElement("span");
 textoPosicao7.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao7.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao7); // Adiciona o texto à página
 textosPosicao.push(textoPosicao7); // Adiciona o texto ao array

  const novoBotao7 = document.createElement("button");
  novoBotao7.textContent = "Sí - 1 seg.";
  novoBotao7.dataset.tooltip = "Botão para ouvir e selecionar a nota Sí para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao7);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao7); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao7.classList.add("botaoSom7");
  // Adiciona um evento de clique ao botão
  novoBotao7.addEventListener("click", function() {
      gerarNovoAudio7();
  }); 

  const quebraDeLinha7 = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha7); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha7); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio7() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio7 = document.createElement("audio");
  novoAudio7.src = "public/Audio Piano/Piano_1_Segundo/7_Sí_493p88HZ_1seg.mp3";
  audiosGerados.push(novoAudio7);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio7);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio7.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio7), 1);
      audioEmExecucao = false;
  });
  novoAudio7.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao8").addEventListener("click", criarBotao7);

//############################################### Si 10 segundos
function criarBotao710seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao710seg = document.createElement("span");
 textoPosicao710seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao710seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao710seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao710seg); // Adiciona o texto ao array

  const novoBotao710seg = document.createElement("button");
  novoBotao710seg.textContent = "Sí - 10 seg.";
  novoBotao710seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Sí para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao710seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao710seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao710seg.classList.add("botaoSom710seg");
  // Adiciona um evento de clique ao botão
  novoBotao710seg.addEventListener("click", function() {
      gerarNovoAudio710seg();
  }); 

  const quebraDeLinha710seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha710seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha710seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio710seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio710seg = document.createElement("audio");
  novoAudio710seg.src = "public/Audio Piano/Piano_10_Segundos/7_Sí_493p88Hz.mp3";
  audiosGerados.push(novoAudio710seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio710seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio710seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio710seg), 1);
      audioEmExecucao = false;
  });
  novoAudio710seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao8p2").addEventListener("click", criarBotao710seg);

//############################################### Si 30 segundos
function criarBotao730seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao730seg = document.createElement("span");
 textoPosicao730seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao730seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao730seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao730seg); // Adiciona o texto ao array


  const novoBotao730seg = document.createElement("button");
  novoBotao730seg.textContent = "Sí - 30 seg.";
  novoBotao730seg.dataset.tooltip = "Botão para ouvir e selecionar a nota Sí para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao730seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao730seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao730seg.classList.add("botaoSom730seg");
  // Adiciona um evento de clique ao botão
  novoBotao730seg.addEventListener("click", function() {
      gerarNovoAudio730seg();
  }); 

  const quebraDeLinha730seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha730seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha730seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio730seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio730seg = document.createElement("audio");
  novoAudio730seg.src = "public/Audio Piano/Piano_30_segundos/7_Si 30 segundos.mp3";
  audiosGerados.push(novoAudio730seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio730seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio730seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio730seg), 1);
      audioEmExecucao = false;
  });
  novoAudio730seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao8p3").addEventListener("click", criarBotao730seg);




//############################################### dó 1 segundo
function criarBotao8() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao8 = document.createElement("span");
 textoPosicao8.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao8.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao8); // Adiciona o texto à página
 textosPosicao.push(textoPosicao8); // Adiciona o texto ao array

  const novoBotao8 = document.createElement("button");
  novoBotao8.textContent = "dó - 1 seg.";
  novoBotao8.dataset.tooltip = "Botão para ouvir e selecionar a nota dó para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao8);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao8); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao8.classList.add("botaoSom8");
  // Adiciona um evento de clique ao botão
  novoBotao8.addEventListener("click", function() {
      gerarNovoAudio8();
  }); 

  const quebraDeLinha8 = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha8); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha8); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio8() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio8 = document.createElement("audio");
  novoAudio8.src = "public/Audio Piano/Piano_1_Segundo/8_dó_523p25Hz_1seg.mp3";
  audiosGerados.push(novoAudio8);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio8);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio8.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio8), 1);
      audioEmExecucao = false;
  });
  novoAudio8.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao9").addEventListener("click", criarBotao8);

//############################################### dó 10 segundos
function criarBotao810seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao810seg = document.createElement("span");
 textoPosicao810seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao810seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao810seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao810seg); // Adiciona o texto ao array



  const novoBotao810seg = document.createElement("button");
  novoBotao810seg.textContent = "dó - 10 seg.";
  novoBotao810seg.dataset.tooltip = "Botão para ouvir e selecionar a nota dó para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao810seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao810seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao810seg.classList.add("botaoSom810seg");
  // Adiciona um evento de clique ao botão
  novoBotao810seg.addEventListener("click", function() {
      gerarNovoAudio810seg();
  }); 

  const quebraDeLinha810seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha810seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha810seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio810seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio810seg = document.createElement("audio");
  novoAudio810seg.src = "public/Audio Piano/Piano_10_Segundos/8_dó_523p25.mp3";
  audiosGerados.push(novoAudio810seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio810seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio810seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio810seg), 1);
      audioEmExecucao = false;
  });
  novoAudio810seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao9p2").addEventListener("click", criarBotao810seg);

//############################################### dó 30 segundos
function criarBotao830seg() {

  
 // Cria um novo elemento de texto para indicar a posição do botão
 const textoPosicao830seg = document.createElement("span");
 textoPosicao830seg.textContent = `Bloco ${botoesCriados.length+1} `;
 textoPosicao830seg.classList.add("posicaoTexto"); // Adiciona a classe CSS para estilizar o texto
 document.getElementById("minhaDiv").appendChild(textoPosicao830seg); // Adiciona o texto à página
 textosPosicao.push(textoPosicao830seg); // Adiciona o texto ao array


  const novoBotao830seg = document.createElement("button");
  novoBotao830seg.textContent = "dó - 30 seg.";
  novoBotao830seg.dataset.tooltip = "Botão para ouvir e selecionar a nota dó para download"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao830seg);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao830seg); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao830seg.classList.add("botaoSom830seg");
  // Adiciona um evento de clique ao botão
  novoBotao830seg.addEventListener("click", function() {
      gerarNovoAudio830seg();
  }); 

  const quebraDeLinha830seg = document.createElement("br");
 document.getElementById("minhaDiv").appendChild(quebraDeLinha830seg); // Adiciona a quebra de linha à página
 quebrasDeLinha.push(quebraDeLinha830seg); // Adiciona a quebra de linha ao array
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio830seg() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio830seg = document.createElement("audio");
  novoAudio830seg.src = "public/Audio Piano/Piano_30_segundos/8_do 30 segundos.mp3";
  audiosGerados.push(novoAudio830seg);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio830seg);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio830seg.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio830seg), 1);
      audioEmExecucao = false;
  });
  novoAudio830seg.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao9p3").addEventListener("click", criarBotao830seg);






//#############################Função para apagar o último botão criado########################
// Função para apagar o último botão, texto correspondente e quebra de linha
function apagarUltimoBotao() {
  if (botoesCriados.length > 0) {
    const ultimoBotao = botoesCriados.pop(); // Remove o último botão do array
    ultimoBotao.parentNode.removeChild(ultimoBotao); // Remove o botão do DOM

    if (textosPosicao.length > 0) {
      const ultimoTexto = textosPosicao.pop(); // Remove o último texto do array
      ultimoTexto.parentNode.removeChild(ultimoTexto); // Remove o texto do DOM
    }

    if (quebrasDeLinha.length > 0) {
      const ultimaQuebra = quebrasDeLinha.pop(); // Remove a última quebra de linha do array
      ultimaQuebra.parentNode.removeChild(ultimaQuebra); // Remove a quebra de linha do DOM
    }
  }

  // Se todos os botões, textos e quebras de linha foram apagados, reseta os arrays
  if (botoesCriados.length === 0 && textosPosicao.length === 0 && quebrasDeLinha.length === 0) {
    botoesCriados = [];
    textosPosicao = [];
    quebrasDeLinha = [];
  }
}

/*// Adiciona um evento de clique ao botão "apagarBotao"
document.getElementById("botaoApagar1").addEventListener("click", apagarUltimoBotao);*/
//função dupla em teste.... teoricamente apaga botões e para audios
document.getElementById("botaoApagar1").addEventListener("click", function() {
  apagarUltimoBotao();
  pararTodosOsAudios(); // Chama a função para parar todos os áudios
  audioEmExecucao = false;
});













//######################### Função apagar o ultimo elemento do array de download############
function apagarUltimoDownload() {
  if (audiosParaDownload.length > 0) {
      const ultimoDownload = audiosParaDownload.pop(); // Remove o último elemento do array de downloads
      // Aqui você pode realizar qualquer outra ação necessária, como excluir o arquivo do sistema de arquivos
      console.log(`Removido o último download: ${ultimoDownload.src}`);
  }
}

// Adiciona um evento de clique ao botão "apagarDownload"
document.getElementById("botaoApagar1").addEventListener("click", apagarUltimoDownload);



//##############################Parar audios################################
// Função para parar todos os áudios em reprodução
function pararTodosOsAudios() {
  // Itera sobre cada elemento de áudio gerado e para sua reprodução
  audiosGerados.forEach(function(audio) {
      audio.pause(); // Pausa a reprodução do áudio
      audio.currentTime = 0; // Define o tempo de reprodução como zero para reiniciar o áudio, se necessário
  });
}
// Adiciona um evento de clique ao botão "botaoParar"
document.getElementById("botaoParar").addEventListener("click", function() {
  pararTodosOsAudios(); // Chama a função para parar todos os áudios
  audioEmExecucao = false;
});

// ###########################Sobre  os textos dos botões de apresentação da pagina:##############

function openWidget() {
  document.getElementById('widget').style.display = 'block';
}

function closeWidget() {
  document.getElementById('widget').style.display = 'none';
}
function openWidget2() {
  document.getElementById('widget2').style.display = 'block';
}

function closeWidget2() {
  document.getElementById('widget2').style.display = 'none';
}
function openWidget3() {
  document.getElementById('widget3').style.display = 'block';
}

function closeWidget3() {
  document.getElementById('widget3').style.display = 'none';
}


// Função para baixar a pasta de downloads
function baixarPastaDownloads() {
  // Cria um elemento <a> para cada áudio no array de downloads e simula o clique para iniciar o download
  audiosParaDownload.forEach(function(audio, index) {
    const link = document.createElement('a');
    link.href = audio.src;
    link.download = `audio_${index}.mp3`;
    link.style.display = 'none'; // Esconde o link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove o link após o download
  });
}

// Adiciona um evento de clique ao botão de download da pasta de downloads
document.getElementById("gravador").addEventListener("click", baixarPastaDownloads);


