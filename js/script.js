var hello= "Olá, mundo!";
alert(hello);

// primeira atividade

/*let nomeCompleto = "Karoline Prestes";
let idade = 26;
let numero = 16;
const soma = idade + numero;
let multiplicacao = idade * numero;

alert (soma);
console.log(nomeCompleto);
console.log(multiplicacao);*/

// segunda atividade

let nomeCompleto = "Karoline Prestes";
let idade = 26;
let numero = 16;
const soma = idade + numero;
let multiplicacao = idade * numero;

function subtracao(num1, num2) {
  if (num1 < num2) {
    return "Não foi possível subtrair";
  } else {
    return num1 - num2;
  }
}

function divisao(num1, num2) {
  if (num2 < 0) {
    return "Não foi possível dividir";
  } else {
    return num1 / num2;
  }
}

alert(soma);
console.log(nomeCompleto);
console.log(multiplicacao);

console.log(subtracao(10, 5)); // 5
console.log(subtracao(5, 10)); // "Não foi possível subtrair"
console.log(divisao(10, 2)); // 5
console.log(divisao(10, -2)); // "Não foi possível dividir"

// terceira atividade

const fruta = {
    nome: "Maçã",
    cor: "Vermelha",
    peso: 0.2,
    tipo: "fruta"
  };
  
  console.log(fruta);

// quarta atividade

 /* const alimentos = [
    { nome: "Maçã", cor: "Vermelha", peso: 0.2, tipo: "fruta" },
    { nome: "Banana", cor: "Amarela", peso: 0.15, tipo: "fruta" },
    { nome: "Alface", cor: "Verde", peso: 0.1, tipo: "verdura" },
    { nome: "Cenoura", cor: "Laranja", peso: 0.3, tipo: "legume" },
    { nome: "Beterraba", cor: "Roxa", peso: 0.25, tipo: "legume" }
  ];
  
  console.log(alimentos);*/

  // quinta atividade

  const alimentos = [
    { nome: "Maçã", cor: "Vermelha", peso: 0.2, tipo: "fruta" },
    { nome: "Banana", cor: "Amarela", peso: 0.15, tipo: "fruta" },
    { nome: "Alface", cor: "Verde", peso: 0.1, tipo: "verdura" },
    { nome: "Cenoura", cor: "Laranja", peso: 0.3, tipo: "legume" },
    { nome: "Beterraba", cor: "Roxa", peso: 0.25, tipo: "legume" }
  ];
  
  // função para exibir o nome das frutas
  
  function mostrarNomesFrutas() {
    alimentos.forEach(function(alimento) {
      if (alimento.tipo === "fruta") {
        console.log(alimento.nome);
      }
    });
  }
  
  // função para contar a quantidade de alimentos
  function contarAlimentosPorTipo() {
    let contadorFrutas = 0;
    let contadorVerduras = 0;
    let contadorLegumes = 0;
  
    alimentos.forEach(function(alimento) {
      if (alimento.tipo === "fruta") {
        contadorFrutas++;
      } else if (alimento.tipo === "verdura") {
        contadorVerduras++;
      } else if (alimento.tipo === "legume") {
        contadorLegumes++;
      }
    });
  
    console.log(`Frutas: ${contadorFrutas}`);
    console.log(`Verduras: ${contadorVerduras}`);
    console.log(`Legumes: ${contadorLegumes}`);
  }
  
  // chamando as funções
  mostrarNomesFrutas();
  contarAlimentosPorTipo();