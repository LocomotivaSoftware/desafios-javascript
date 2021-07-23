const participantes = [
    { nome: "David", pontuacao: 80, idade: 25 },
    { nome: "Rafael", pontuacao: 75, idade: 20 },
    { nome: "Fulano", pontuacao: 12, idade: 65 },
    { nome: "Beltrano", pontuacao: 65, idade: 12 },
    { nome: "Ciclano", pontuacao: 12, idade: 24 }
];

// Deve retornar o nome do participante que obteve a maior pontuacao
function quemGanhou() {
    return(participantes[0].nome)
}

// Deve retornar a pontuacao média dos participantes
function pontuacaoMedia() {

}

// Deve retornar a soma da pontuacao de todos os participantes
function pontuacaoTotal() {

}

// Deve retornar a idade do participante mais velho
function veterano() {
    return(participantes[2].idade)
}

// Deve retornar o número de participantes do torneio
function numeroDeParticipantes(numero) {
    return (participantes.length)
}


console.log(`O vencedor é ${quemGanhou()}!`);
console.log(`Tivemos nessa edição um total de ${numeroDeParticipantes()} participantes`);
console.log(`A pontuacao média dos participantes foi de: ${pontuacaoMedia()} pontos`);
console.log(`O pontuacao total dos participantes foi ${pontuacaoTotal()} pontos`);
console.log(`O participante veterano dessa edição tem ${veterano()} anos`);