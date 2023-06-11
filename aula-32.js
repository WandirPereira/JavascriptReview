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

lista.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
    return 0;
})

console.log(lista);
// [
//     { nome: 'Jose', idade: 13 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Gabriela', idade: 25 },
//     { nome: 'Heitor', idade: 32 },
//     { nome: 'Sandra', idade: 33 },
//     { nome: 'Joao', idade: 42 },
//     { nome: 'Gustavo', idade: 64 },
//     { nome: 'Fernanda', idade: 65 },
//     { nome: 'André', idade: 69 }
//   ]

lista.sort((a, b) => {
    if (a.idade > b.idade) {
        return -1;
    }
    if (a.idade < b.idade) {
        return 1;
    }
    return 0;
})
console.log(lista);
// [
//     { nome: 'André', idade: 69 },
//     { nome: 'Fernanda', idade: 65 },
//     { nome: 'Gustavo', idade: 64 },
//     { nome: 'Joao', idade: 42 },
//     { nome: 'Sandra', idade: 33 },
//     { nome: 'Heitor', idade: 32 },
//     { nome: 'Gabriela', idade: 25 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Jose', idade: 13 }
//   ]


lista.sort((a, b) => {
    if (a.nome.toUpperCase() > b.nome.toUpperCase()) {
        return -1;
    }
    if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
        return 1;
    }
    return 0;
})
console.log(lista);
// [
//     { nome: 'Sandra', idade: 33 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Jose', idade: 13 },
//     { nome: 'Joao', idade: 42 },
//     { nome: 'Heitor', idade: 32 },
//     { nome: 'Gustavo', idade: 64 },
//     { nome: 'Gabriela', idade: 25 },
//     { nome: 'Fernanda', idade: 65 },
//     { nome: 'André', idade: 69 }
//   ]

lista.sort((a, b) => {
    if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
        return -1;
    }
    if (a.nome.toUpperCase() > b.nome.toUpperCase()) {
        return 1;
    }
    return 0;
})
console.log(lista);
// [
//     { nome: 'André', idade: 69 },
//     { nome: 'Fernanda', idade: 65 },
//     { nome: 'Gabriela', idade: 25 },
//     { nome: 'Gustavo', idade: 64 },
//     { nome: 'Heitor', idade: 32 },
//     { nome: 'Joao', idade: 42 },
//     { nome: 'Jose', idade: 13 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Sandra', idade: 33 }
// ]
