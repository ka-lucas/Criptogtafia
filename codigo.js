selecione = document.querySelector("#sel");
botao = document.querySelector("#btn");
codificar = document.querySelector("#codificar");
decodificar = document.querySelector("#decodificar");
let radio1 = document.querySelector("#b64");
let radio2 = document.querySelector("#cesar");
var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];


/*base64*/

function base64() {
   mensagem = document.form.mensagem.value;

   if (codificar.checked) {
      var codificado = btoa(mensagem);
      document.form.resultado.value = codificado;
   } else if (decodificar.checked) {
      var decodificado = atob(mensagem);
      document.form.resultado.value = decodificado;
   }
}

/*cifra de cesar*/

function cifraCesar() {
   if (codificar.checked) {
      mensagem = document.form.mensagem.value.toLowerCase();
      chave = parseInt(document.form.incremento.value);
      variavel = parseInt(chave);
      if (variavel < 0) {
         variavel_1 = variavel * -1;
      } else {
         variavel_1 = variavel;
      }
      criptografia = [];

      for (i = 0; i < mensagem.length; i++) {
         if (mensagem[i] != " ") {
            for (j = 0; j < alfabeto.length; j++) {
               if (mensagem[i] == alfabeto[j]) {
                  criptografia[i] =
                     alfabeto[(j + variavel_1) % alfabeto.length];
                  break;
               }
            }
         } else {
            criptografia[i] = " ";
         }
      }
      document.form.resultado.value = criptografia.join("");
   } else if (decodificar.checked) {
      mensagem = document.form.mensagem.value.toLowerCase();
      chave = parseInt(document.form.incremento.value);
      variavel = parseInt(chave);
      casas = alfabeto.length;
      if (variavel < 0) {
         variavel_1 = variavel * -1;
      } else {
         variavel_1 = variavel;
      }
      criptografia = [];

      for (i = 0; i < mensagem.length; i++) {
         if (mensagem[i] != " ") {
            for (j = 0; j < alfabeto.length; j++) {
               if (mensagem[i] == alfabeto[j] && j - variavel >= 0) {
                  criptografia[i] =
                     alfabeto[(j - variavel_1) % alfabeto.length];
                  break;
               } else if (mensagem[i] == alfabeto[j] && j - variavel < 0) {
                  criptografia[i] =
                     alfabeto[
                     ((j - variavel) % alfabeto.length) + parseInt(casas)
                     ];
                  break;
               }
            }
         } else {
            criptografia[i] = " ";
         }
      }
      document.form.resultado.value = criptografia.join("");
   }
}

incremento = document.querySelector(".incremento");
selecione.addEventListener("click", function () {
   if (selecione.value == "cifradecesar") {
      incremento.style.display = "block";
   } else {
      incremento.style.display = "none";
   }
});

//trocando o nome do botao

codificar.addEventListener("click", function () {
   if (decodificar.checked) {
      botao.innerText = "Decodificar Mensagem";
   } else {
      botao.innerText = "Codificar Mensagem!";
   }
});

decodificar.addEventListener("click", function () {
   if (decodificar.checked) {
      botao.innerText = "Decodificar Mensagem!";
   } else {
      botao.innerText = "Codificar Mensagem!";
   }
});

botao.addEventListener("click", function (event) {

   event.preventDefault();
   if (radio1.checked) {
      resultado.innerText = base64();

   } else if (radio2.checked) {
      resultado.innerText = cifraCesar();
   }
});
