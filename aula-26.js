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


console.log("Retorna somente um campo");
const convertObjeto = (objeto) => {
    return objeto.idade;
}
console.log(lista.map(convertObjeto));

console.log("Retorna somente um campo");
console.log(lista.map((x) => x.idade));



console.log("Retorna todo o objeto + um campo concatenado");
console.log(lista.map((objeto) => {
    return {
        nome: objeto.nome,
        idade: objeto.idade,
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}
));

console.log("Retorna mais de um campo");
const convertObjeto2 = (objeto) => {
    return {
        nome: objeto.nome,
        idade: objeto.idade
    }
}
console.log(lista.map(convertObjeto2));


console.log("Spread01");
console.log(lista.map((objeto) => {
    return {
        ...objeto
    }
}
));


console.log("Spread02");
console.log(lista.map((objeto) => {
    return {
        ...objeto,
        idade: `${objeto.nome} + ${objeto.idade}`
    }
}
));


console.log("Spread03");
console.log(lista.map((objeto) => {
    return {
        ...objeto,
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}
));



