const participants = [
    {name:'Davidin Digidin', score: 80, age: 25},
    {name: 'Rafael', score: 75, age:20},
    {name: 'Randinho Barber Enemy', score: 82, age: 65},
    {name: 'Bryan', score: 65, age: 12},
    {name: 'Tales', score: 12, age: 24}
];

// Must return the name of the participant with the highest score
let winner = function(){
    participants.sort(function(a,b){
        return b.score - a.score
    })
    return participants[0].name
}

// Must return the participant's average score
let averagescore = function(){
    let somascore = participants.reduce(function(prev, cur){
        return prev += cur.score
    }, 0)
    return somascore / participants.length 
}

// Must return the participant's score sum
let scoresum = participants.reduce(function(prev, cur){
        return prev += cur.score
}, 0)

// Must return the age of the older participant
let oldman = function(){
    let participantsage = participants.map(function(participant){
        return participant.age
    })
    participantsage.sort(function(a,b){
        return b - a
    })
    return participantsage[0]
}

// Must return the number of tournament participants
let numberofParticipants = function(){
    return participants.length
}

console.log(`We had in this tournament ${numberofParticipants()} participants`);
console.log(`The participants's total score is ${scoresum} points`);
console.log(`The participants's average score is ${averagescore()} points`);
console.log(`The older participant of this tournament has ${oldman()} years`);
console.log(`The tournament winner is ${winner()}`);