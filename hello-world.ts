// tipagem no TypeScript

// tipagem implicita

let username = "shaolin_matador_de_porco"
username = "oioi"

// tipagem explitita

let pi: number = 3.1415
pi = 3434

let logado: boolean = true
logado = false


// union types
let rg: number | string | boolean = 2598989898989
rg = "232323232323"
rg = true

let generica: any = []
generica = {
  a: '',
  b: 8,
  c: true
}

generica = "eu sou uma variavel generica"
generica = 7.90


const listaDeNomes: string[] = ['joão', 'rodrigo', 'maria', 'pedro']
listaDeNomes.push('vitor')

const notas: number[] = [1,12,3,4,5,6,6]
notas.push(3)


const nomes: Array<string | number> = ['string', 4, '23232', 9.09]

const array: Array<boolean> = [true, false, true]

const arr: Array<any> = [1, true, {}, [], 'oioio']
const arr2: any[] = [1, true, {}, [], 'oioio']