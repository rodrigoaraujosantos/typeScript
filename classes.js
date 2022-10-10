"use strict";
class Cachorro {
    // nome: string
    // raca: string
    // cor: string 
    // idade: number
    // peso: number
    // altura: number 
    // morde: boolean 
    // vacinado: boolean 
    // pedigree: boolean 
    // //metodo construtor
    constructor(nome, raca, cor, idade) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        //             this.nome = nome
        //             this.raca = raca
        //             this.cor = cor
        //             this.idade = idade
        // 
    }
    somar(a, b) {
        return a + b;
    }
}
let c = new Cachorro('mc poze', 'pitbull', 'preto', 2);
// let c2 = new Cachorro('justin biber', 'chuaua', 'branco', 19)
console.log(c);
// console.log(c2)
