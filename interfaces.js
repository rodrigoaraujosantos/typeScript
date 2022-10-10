"use strict";
// let pessoa = {
//   nome: 'Pietro',
//   idade: 22,
//   altura: 1.8,
//   cpf: '111.111.111-45',
//   solteiro: false,
//   habilidades: ['java', 'angular', 'typeScript', 'javaScript', 'springBoot', 'nodeJs'],
//   endereco: {
//     rua: 'Rua feliz',
//     numero: 567,
//     estado: 'CE',
//     complemento: 'Sem complemento',
//     cep: '22222-222'
//   }
// }
const p = {
    altura: 1.9,
    nome: 'faustão',
    idade: 12,
    cpf: '44444444444',
    solteiro: false,
    habilidades: ['html'],
    endereco: {
        rua: 'rua triste',
        cep: '333333555',
        complemento: 'esquina',
        estado: 'sp',
        numero: 23
    },
    rg: '989898989898',
    cumprimentar() {
        console.log("Saudações, meu nome é " + this.nome);
    }
};
const p2 = {
    nome: 'Paulo',
    altura: 1.7,
    idade: 25,
    cpf: '3333333333',
    habilidades: ['html'],
    endereco: {
        rua: 'rua direita',
        numero: 989,
        cep: '767676767',
        complemento: 'oioio',
        estado: 'pe'
    },
    rg: '87878787',
    solteiro: false,
    cumprimentar() {
        console.log("oi, " + this.nome);
    },
};
