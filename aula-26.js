const lista = [

    {
        nome: 'Jose',
        idade: 13
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
console.log("Retorna a lista");
console.log(lista);
Retorna a lista
// [
//   { nome: 'Jose', idade: 13 },
//   { nome: 'Joao', idade: 42 },
//   { nome: 'Maria', idade: 23 },
//   { nome: 'Gabriela', idade: 25 },
//   { nome: 'Fernanda', idade: 65 },
//   { nome: 'André', idade: 69 },
//   { nome: 'Heitor', idade: 32 },
//   { nome: 'Gustavo', idade: 64 },
//   { nome: 'Sandra', idade: 33 }
// ]

console.log("Retorna somente um campo");
const convertObjeto = (objeto) => {
    return objeto.idade;
}
console.log(lista.map(convertObjeto));
Retorna somente um campo
// [
//   13, 42, 23, 25, 65,
//   69, 32, 64, 33
// ]

console.log("Retorna somente um campo");
console.log(lista.map((x) => x.idade));
Retorna somente um campo
// [
//   13, 42, 23, 25, 65,
//   69, 32, 64, 33
// ]


console.log("Retorna todo o objeto + um campo concatenado");
console.log(lista.map((objeto) => {
    return {
        nome: objeto.nome,
        idade: objeto.idade,
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}
));
// [
//     { nome: 'Jose', idade: 13, nomeIdade: 'Jose + 13' },
//     { nome: 'Joao', idade: 42, nomeIdade: 'Joao + 42' },
//     { nome: 'Maria', idade: 23, nomeIdade: 'Maria + 23' },
//     { nome: 'Gabriela', idade: 25, nomeIdade: 'Gabriela + 25' },
//     { nome: 'Fernanda', idade: 65, nomeIdade: 'Fernanda + 65' },
//     { nome: 'André', idade: 69, nomeIdade: 'André + 69' },
//     { nome: 'Heitor', idade: 32, nomeIdade: 'Heitor + 32' },
//     { nome: 'Gustavo', idade: 64, nomeIdade: 'Gustavo + 64' },
//     { nome: 'Sandra', idade: 33, nomeIdade: 'Sandra + 33' }
//   ]


console.log("Retorna mais de um campo");
const convertObjeto2 = (objeto) => {
    return {
        nome: objeto.nome,
        idade: objeto.idade
    }
}
console.log(lista.map(convertObjeto2));
// Retorna mais de um campo
// [
//   { nome: 'Jose', idade: 13 },
//   { nome: 'Joao', idade: 42 },
//   { nome: 'Maria', idade: 23 },
//   { nome: 'Gabriela', idade: 25 },
//   { nome: 'Fernanda', idade: 65 },
//   { nome: 'André', idade: 69 },
//   { nome: 'Heitor', idade: 32 },
//   { nome: 'Gustavo', idade: 64 },
//   { nome: 'Sandra', idade: 33 }
// ]

console.log("Spread01");
console.log(lista.map((objeto) => {
    return {
        ...objeto
    }
}
));
// Spread01
// [
//   { nome: 'Jose', idade: 13 },
//   { nome: 'Joao', idade: 42 },
//   { nome: 'Maria', idade: 23 },
//   { nome: 'Gabriela', idade: 25 },
//   { nome: 'Fernanda', idade: 65 },
//   { nome: 'André', idade: 69 },
//   { nome: 'Heitor', idade: 32 },
//   { nome: 'Gustavo', idade: 64 },
//   { nome: 'Sandra', idade: 33 }
// ]

console.log("Spread02");
console.log(lista.map((objeto) => {
    return {
        ...objeto,
        idade: `${objeto.nome} + ${objeto.idade}`
    }
}
));
Spread02
// [
//   { nome: 'Jose', idade: 'Jose + 13' },
//   { nome: 'Joao', idade: 'Joao + 42' },
//   { nome: 'Maria', idade: 'Maria + 23' },
//   { nome: 'Gabriela', idade: 'Gabriela + 25' },
//   { nome: 'Fernanda', idade: 'Fernanda + 65' },
//   { nome: 'André', idade: 'André + 69' },
//   { nome: 'Heitor', idade: 'Heitor + 32' },
//   { nome: 'Gustavo', idade: 'Gustavo + 64' },
//   { nome: 'Sandra', idade: 'Sandra + 33' }
// ]

console.log("Spread03");
console.log(lista.map((objeto) => {
    return {
        ...objeto,
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}
));
// Spread03
// [
//   { nome: 'Jose', idade: 13, nomeIdade: 'Jose + 13' },
//   { nome: 'Joao', idade: 42, nomeIdade: 'Joao + 42' },
//   { nome: 'Maria', idade: 23, nomeIdade: 'Maria + 23' },
//   { nome: 'Gabriela', idade: 25, nomeIdade: 'Gabriela + 25' },
//   { nome: 'Fernanda', idade: 65, nomeIdade: 'Fernanda + 65' },
//   { nome: 'André', idade: 69, nomeIdade: 'André + 69' },
//   { nome: 'Heitor', idade: 32, nomeIdade: 'Heitor + 32' },
//   { nome: 'Gustavo', idade: 64, nomeIdade: 'Gustavo + 64' },
//   { nome: 'Sandra', idade: 33, nomeIdade: 'Sandra + 33' }
// ]


