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

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});
console.log(pessoas);
// {
//     Jose: { idade: 13 },
//     Joao: { idade: 42 },
//     Maria: { idade: 23 },
//     Gabriela: { idade: 25 },
//     Fernanda: { idade: 65 },
//     'André': { idade: 69 },
//     Heitor: { idade: 32 },
//     Gustavo: { idade: 64 },
//     Sandra: { idade: 33 }
//   }

const chaves = Object.keys(pessoas);
console.log(chaves);
// [
//     'Jose',     'Joao',
//     'Maria',    'Gabriela',
//     'Fernanda', 'André',
//     'Heitor',   'Gustavo',
//     'Sandra'
//   ]

//https://github.com/juliossena/curso_javascript


console.log(Object.keys(lista[0]));
// [ 'nome', 'idade' ]

const listaDeVolta = chaves.map(chave => ({ nome: chave, idade: pessoas[chave].idade }));
console.log('listaDeVolta', listaDeVolta);
// listaDeVolta [
//     { nome: 'Jose', idade: 13 },
//     { nome: 'Joao', idade: 42 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Gabriela', idade: 25 },
//     { nome: 'Fernanda', idade: 65 },
//     { nome: 'André', idade: 69 },
//     { nome: 'Heitor', idade: 32 },
//     { nome: 'Gustavo', idade: 64 },
//     { nome: 'Sandra', idade: 33 }
//   ]
