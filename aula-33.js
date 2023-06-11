const lista = [

    {
        nome: 'Jose',
        idade: 13  //,
        //exibir: true
    },
    {
        nome: 'Joao',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Gabriela',
        idade: 25
    },
    {
        nome: 'Fernanda',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Heitor',
        idade: 32
    },
    {
        nome: 'Gustavo',
        idade: 64
    },
    {
        nome: 'Sandra',
        idade: 33
    }
]

console.log(' ')
console.log('Lista')
console.log(lista);
// [
//     { nome: 'Jose', idade: 13 },
//     { nome: 'Joao', idade: 42 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Gabriela', idade: 25 },
//     { nome: 'Fernanda', idade: 65 },
//     { nome: 'André', idade: 69 },
//     { nome: 'Heitor', idade: 32 },
//     { nome: 'Gustavo', idade: 64 },
//     { nome: 'Sandra', idade: 33 }
// ]

//some pelo ao menos um elemento da lista atenbda à condição
const resultadoSome = lista.some((objeto) => objeto.idade > 100);

console.log('resultadoSome = ', resultadoSome)
//resultadoSome =  false

//some pelo ao menos um elemento da lista atenbda à condição
const resultadoSome2 = lista.some((objeto) => objeto.idade > 30);

console.log('resultadoSome2 = ', resultadoSome2);
//resultadoSome2 =  true

//todos os elementos do array devem atender à condição
const resultadoEvery = lista.every((objeto) => objeto.idade > 30);
console.log('resultadoEvery = ', resultadoEvery);
//resultadoEvery =  false

//todos os elementos do array devem atender à condição
const resultadoEvery2 = lista.every((objeto) => objeto.idade > 10);
console.log('resultadoEvery2 = ', resultadoEvery2);
//resultadoEvery2 =  true
