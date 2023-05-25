const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

//oculta para testes
//const copiar = document.querySelector(".copiar");


const criptografarTexto    = document.getElementById("btnCriptografar");
const descriptografarTexto = document.getElementById("btnDescriptografar");

// Para substituir o texto
//const novadiv = document.getElementById(".caixa-codificador");

const div = document.querySelector(".text-area-codificador");
const cop = document.querySelector(".text-area");

//const bot = document.querySelector("botao-copiar");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"



// Chamada por ById
// teste botao Criptografar funcionando !!!

criptografarTexto.addEventListener('click', function() {

  //let fraseCriptografada;

  //const mensagem = criptografarTexto(textArea.value);
  //mensagem.value = textoCriptografado;

   // teste -     navigator.clipboard.writeText(document.querySelector(".mensagem").value);

  ocultarMensagem();

  mostrarBotao();

  console.log('A função foi chamada - função criptografar');
    

    let chave = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  console.log('funcionou a chave criptografia');
  let fraseCriptografada = document.querySelector(".text-area").value;
  console.log('mensagem recebida');
  console.log(fraseCriptografada);
  //fraseCriptografada = fraseCriptografada.toLowerCase();
  console.log('funcionou antes do for');

  fraseCriptografada = fraseCriptografada.toLowerCase();

  var verificaCaracter = /^([A-Záàâãéèêíïóôõöúçñà-úÀ-Ú0-9]|\s+)+$/;

        if (verificaCaracter.test(document.getElementById("text-area").value) == true) {
           // document.getElementById("text-area").value = '';
            document.getElementById("text-area").placeholder = "Texto inválido";
            alert( 'Texto inválido!');
          } else

  for (let i = 0; i < chave.length; i++) {
    if (fraseCriptografada.includes(chave[i][0])) {
        fraseCriptografada = fraseCriptografada.replaceAll(
        chave[i][0],
        chave[i][1]
      );

        
    }
  }

  console.log('funcionou depois do for');

  
  div.textContent = fraseCriptografada;

  //console.log('funcionou ate recebimento da DIV');
  //return fraseCriptografada;
  
  console.log(fraseCriptografada);

  }

);





descriptografarTexto.addEventListener('click', function() {

    let chave = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  console.log('funcionou a chave criptografia');
  let fraseDescriptografada = document.querySelector(".text-area-codificador").value;
  div.textContent = fraseDescriptografada;

  console.log('mensagem recebida');
  console.log(fraseDescriptografada);
  //console.log(fraseCriptografada);
  console.log(' depois ')
  //fraseCriptografada = fraseCriptografada.toLowerCase();
  console.log('funcionou antes do for');

  fraseDescriptografada = fraseDescriptografada.toLowerCase();

  for (let i = 0; i < chave.length; i++) {
    if (fraseDescriptografada.includes(chave[i][0])) {
        fraseDescriptografada = fraseDescriptografada.replaceAll(
        chave[i][0],
        chave[i][1]
      );

        
    }
  }

  div.textContent = fraseDescriptografada;
  cop.textContent = fraseDescriptografada;
  
  console.log(fraseDescriptografada);
  console.log(fraseCriptografada);

}
);


function copiarTexto() {
  //const textoCopiado = document.querySelector(".text-area-codificador").value;

  var textoCopiado = document.getElementById('text-area-codificador');
  cop.textContent =  textoCopiado;

  textoCopiado.select();
  document.execCommand('copy');
  
  console.log('função copiar funcionou');
  console.log(textoCopiado);
}


const textoMensagem = document.querySelector(".mensagem");
const textoDigitado = document.querySelector(".text-area");
const imagem        = document.querySelector(".imagem-codificador");
const botao         = document.querySelector(".botao-copiar");

function mostrarMensagem(){
  textoMensagem.style.display = "block";
  textoDigitado.style.display = "block";

}

function ocultarMensagem(){
  textoMensagem.style.display = "none";
  imagem.style.display        = "none";
 

}

function mostrarBotao(){

  botao.style.display = "block";

}