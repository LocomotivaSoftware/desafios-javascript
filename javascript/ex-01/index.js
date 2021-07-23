const participantes = [
  { nome: "David", pontuacao: 80, idade: 25 },
  { nome: "Rafael", pontuacao: 75, idade: 20 },
  { nome: "Fulano", pontuacao: 12, idade: 65 },
  { nome: "Beltrano", pontuacao: 65, idade: 12 },
  { nome: "Ciclano", pontuacao: 12, idade: 24 }
];
let total = participantes.length;
let idade = participantes[0].idade;
let vencedor = participantes[0].nome;

for (let id in participantes) {
  if (participantes[id].idade > idade) {
    idade = participantes[id].idade;
  }
}
for (let pt in participantes) {
  if (participantes[pt].pontuacao > vencedor) {
    vencedor = participantes[pt].pontuacao;
  }
}
// Deve retornar o nome do participante que obteve a maior pontuacao
function quemGanhou() {
  return vencedor;
}

// Deve retornar a pontuacao média dos participantes
function pontuacaoMedia() {}

// Deve retornar a soma da pontuacao de todos os participantes
function pontuacaoTotal() {}

// Deve retornar a idade do participante mais velho
function veterano() {
  return idade;
}

// Deve retornar o número de participantes do torneio
function numeroDeParticipantes() {
  return total;
}

console.log(`O vencedor é ${quemGanhou()}!`);
console.log(
  `Tivemos nessa edição um total de ${numeroDeParticipantes()} participantes`
);
console.log(
  `A pontuacao média dos participantes foi de: ${pontuacaoMedia()} pontos`
);
console.log(
  `O pontuacao total dos participantes foi ${pontuacaoTotal()} pontos`
);
console.log(`O participante veterano dessa edição tem ${veterano()} anos`);
