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

// console.log(' ')
// console.log('Pessoa')

// const pessoa = {
//     jose: {
//         idade: 54,
//     },
//     joao: {
//         idade: 65,
//     },
//     maria: {
//         idade: 23,
//     }
// }

// console.log(pessoa.jose.idade);

const pessoa2 = lista.reduce((acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            ...objeto
        }
    }
}, {});  //as úlitmas chaves representam o valor inicial, ou seja, por exemplo, poderia ser Julio:{ nome: 'Julio', idade: 26}

console.log(pessoa2);
// {
//     Jose: { nome: 'Jose', idade: 13 },
//     Joao: { nome: 'Joao', idade: 42 },
//     Maria: { nome: 'Maria', idade: 23 },
//     Gabriela: { nome: 'Gabriela', idade: 25 },
//     Fernanda: { nome: 'Fernanda', idade: 65 },
//     'André': { nome: 'André', idade: 69 },
//     Heitor: { nome: 'Heitor', idade: 32 },
//     Gustavo: { nome: 'Gustavo', idade: 64 },
//     Sandra: { nome: 'Sandra', idade: 33 }
//   }

console.log(pessoa2.Gustavo.idade);
// 64

const pessoa3 = lista.reduce((acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            ...objeto
        }
    }
}, { Julio: { nome: 'Julio', idade: 26 } });

console.log(pessoa3);
// {
//     Julio: { nome: 'Julio', idade: 26 },
//     Jose: { nome: 'Jose', idade: 13 },
//     Joao: { nome: 'Joao', idade: 42 },
//     Maria: { nome: 'Maria', idade: 23 },
//     Gabriela: { nome: 'Gabriela', idade: 25 },
//     Fernanda: { nome: 'Fernanda', idade: 65 },
//     'André': { nome: 'André', idade: 69 },
//     Heitor: { nome: 'Heitor', idade: 32 },
//     Gustavo: { nome: 'Gustavo', idade: 64 },
//     Sandra: { nome: 'Sandra', idade: 33 }
//   }

const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade);
    return acc;
}, []);

console.log(pessoasArray);
// [
//     13, 42, 23, 25, 65,
//     69, 32, 64, 33
//   ]
