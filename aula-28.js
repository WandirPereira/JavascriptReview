const lista = [

    {
        nome: 'Jose',
        idade: 13,
        exibir: true
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
// Lista
// [
//   { nome: 'Jose', idade: 13, exibir: true },
//   { nome: 'Joao', idade: 42 },
//   { nome: 'Maria', idade: 23 },
//   { nome: 'Gabriela', idade: 25 },
//   { nome: 'Fernanda', idade: 65 },
//   { nome: 'André', idade: 69 },
//   { nome: 'Heitor', idade: 32 },
//   { nome: 'Gustavo', idade: 64 },
//   { nome: 'Sandra', idade: 33 }
// ]

console.log(' ')
console.log('Lista Filtrada - filter devolve uma lista filtrada')
const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 30);
console.log(listaFiltrada);
// Lista Filtrada - filter devolve uma lista filtrada
// [
//   { nome: 'Joao', idade: 42 },
//   { nome: 'Fernanda', idade: 65 },
//   { nome: 'André', idade: 69 },
//   { nome: 'Heitor', idade: 32 },
//   { nome: 'Gustavo', idade: 64 },
//   { nome: 'Sandra', idade: 33 }
// ]

console.log(' ')
console.log('Lista Filtrada 2 - ! converte undefined em true -- !! converte undefined em false')
const listaFiltrada2 = lista.filter((pessoa) => !!pessoa.exibir);  //! converte undefined em true -- !! converte undefined em false
console.log(listaFiltrada2);
// Lista Filtrada 2 - ! converte undefined em true -- !! converte undefined em false
// [ { nome: 'Jose', idade: 13, exibir: true } ]
