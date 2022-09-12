// Printida konsooli välja tekst.
console.log('hi')

/* 
  Funktsiooni loomine, kus me ei kasutada console.log-i, 
  vaid tagastame stringi ja saame välja logida eraldi.
*/ 
function sayHi(){
  return 'hello'
}

console.log(sayHi())

// Arrow function-i näide, põhimõtteliselt teine viis funktsiooni deklareerimiseks.

const arrowFunction = () => {
  return 'hello from arrow function'
}

console.log(arrowFunction())

/*
  Lühendatud versioon arrow functioni kasutamisest, mida saab kasutada üherealiselt, kus
  on vaikimisi tagastus (return), kui loogelisi sulgi mitte kasutada.
*/

const shortArrowFunction = () => 'hello from short arrow function'

/*
  Tunni ülesanne: 
  Kirjutage 3 erinevat funktsiooni kirjutamise tüüpi, 
  mis võtavad parameetritena sisse a ja b ja tagastavad nende summa
  (lahendus puudub)
*/

// Kuidas mõistate antud koodi? Kuidas seda käivitada?

const sumA = a => b => a+b

// 2 küsimuse lahendus: 

console.log('sumA', sumA(3)(4))

/*
  Tunni ülesanne: 
  Kirjutada see ümber funktiooni kujuna pikalt välja
  (function sumB(a){ ... })
*/

// Lahendus:

function sumB(a){
  return function(b){
    return a+b
  }
}

console.log('sumB', sumB(3)(4))

/*
  Selleks, et koode nähes ära ei ehmataks, võib seda ka pikendada:
*/

const sumC = a => b => c => d => a + b + c + d
console.log('sumC', sumC(1)(2)(3)(4))

/*
  Tunni ülesanne:
  Mis järjekorras numbrid esinevad ja miks? Mis on üleliigne?
*/

const bla = async () => {
  setTimeout(() => console.log('1'), 0)
  await setTimeout(() => console.log('2'), 0)
  console.log(new Promise((resolve, reject) => {
    resolve('3')
  }))
  console.log('4')
  console.log(await new Promise(resolve => {
    resolve('5')
  }))
  console.log(await new Promise(resolve => setTimeout(() => resolve('6'), 0)))
}

bla()

/*
  Lahendus vaadata: 
  https://github.com/rakenduste-programmeerimine-2022/kursus/wiki/Awesome-videos-and-channels-(YouTube)
  Vaadata pealkirja "Must understand before becoming a JS Ninja" alt:
    1. What the heck is the event loop anyway? | Philip Roberts | JSConf EU
    2. Asynchrony: Under the Hood - Shelley Vohr - JSConf EU
*/

// Arrow funktsioone kasutame handleritena/callbackidena

// setTimeout(() => {})
// setTimeout(function bla(){ })

/* 
  Tunnitöö: 
  Tutvuda 15 minuti jooksul iseseisvalt .map(), .filter() ja .reduce() funktsioonidega. 
  Saada aru, kuidas nad töötavad ja miks nii ning mida nad tagastavad.
*/

// Näited lahendustena: 

let array = [1,2,3,4,5]

// .map() saab kasutada kujul .map(element => element)

let array2 = array.map(element => element - 1)
console.log({ array2 })

// .filter()

let array3 = array.filter(element => element >= 3)
console.log({ array3 })

// .reduce()

let array4 = array.reduce((acc,cur) => acc+cur, 0) // 0 annab 15, 10 annab 25, -15 annab 0
console.log({ array4 })

// Lisanäited: 

let array5 = array.map(element => 
  ({ 
    name: `Name ${element}`, 
    value: element, 
    date: new Date().toISOString() 
  }))

console.log({ array5 })

/*
  Näide JS-i shorthandi kohta:
  Määrata võib kas key-value paari, või ainult muutuja, 
  sellisel juhul kasutab key-na muutuja nime ja value-na muutuja väärtust
*/

const randomObject = {
  a: 1,
  b: 2
}

console.log({ randomObject: randomObject })
console.log({ randomObject })

/*
  Näited spread syntaxi (...) kohta ja kuidas kopeerida objektide sisu
  ja objekte saab defineerida loogeliste sulgudega {}
*/

const a = {
  a: 1,
  b: 2
}

const b = {
  ...a,
  c: 3
}

// objekt b nüüd saab a objekti { a: 1, b: 2 } endale ja lisab omakorda juurde { c: 3 }

console.log({ b })

/*
  Näiteid veel selle kohta, kui määrata key-value paar või kui kasutada shorthandi
  ehk lasta key olla muutuja nimetuse järgi
*/

const person = {
  name: 'Mari',
  age: 25
}

console.log({
  person1: {
    name: 'Juku',
    age: 99
  },
  person: person,
  'suvaline nimetus': person,
  person
})

let arrayX = [1,2,3]

console.log({
  'this is my favourite array': arrayX,
  arrayX
})

// Näide, kuidas klassidega React-i state-i uuendati

/*
  const state = {
    a: 1,
    b: 2
  }

  setState({
    ...state,
    loading: true
  })
*/