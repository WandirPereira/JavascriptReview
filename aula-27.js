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

console.log(' ')
console.log('Com for')
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
console.log(' ')
console.log('Com forEach')
lista.forEach((objeto) => console.log(objeto));


console.log(' ')
console.log('Soma idades com forEach')
let soma = 0;
lista.forEach((objeto) => {
    soma += objeto.idade;
}
);
console.log('Soma: ', soma)


console.log(' ')
console.log('Soma idades com forEach V2')
let soma2 = 0;

const somaIdade = (objeto) => {
    soma2 += objeto.idade;
};
lista.forEach(somaIdade);

console.log('Soma: ', soma)
