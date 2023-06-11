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
console.log('Lista Find - find devolve primeiro objeto encontrado')
//Lista Find - find devolve primeiro objeto encontrado

const novapessoa = lista.find((pessoa) => pessoa.idade > 30);
console.log(novapessoa);
// { nome: 'Joao', idade: 42 }

const novapessoa2 = lista.find((pessoa) => pessoa.nome === 'Fernanda');
console.log(novapessoa2);
// { nome: 'Fernanda', idade: 65 }

//Melhor usar:
const buscarPessoa = (pessoa) => pessoa.nome === 'Fernanda';
const novaPessoa3 = lista.find(buscarPessoa);
console.log(novaPessoa3);
// { nome: 'Fernanda', idade: 65 }
