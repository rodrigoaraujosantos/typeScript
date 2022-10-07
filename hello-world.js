"use strict";
// tipagem no TypeScript
// tipagem implicita
let username = "shaolin_matador_de_porco";
username = "oioi";
// tipagem explitita
let pi = 3.1415;
pi = 3434;
let logado = true;
logado = false;
// union types
let rg = 2598989898989;
rg = "232323232323";
rg = true;
let generica = [];
generica = {
    a: '',
    b: 8,
    c: true
};
generica = "eu sou uma variavel generica";
generica = 7.90;
const listaDeNomes = ['joão', 'rodrigo', 'maria', 'pedro'];
listaDeNomes.push('vitor');
const notas = [1, 12, 3, 4, 5, 6, 6];
notas.push(3);
const nomes = ['string', 4, '23232', 9.09];
const array = [true, false, true];
const arr = [1, true, {}, [], 'oioio'];
const arr2 = [1, true, {}, [], 'oioio'];
