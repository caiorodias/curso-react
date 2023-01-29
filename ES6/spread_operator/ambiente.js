const a1 = [1, 2, 3]

const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

/* faz com que unam-se todos os elementos dos dois arrays */

console.log(a3)

/* Também podemos adicinar dados em um array que já tem dados nele */

const a4 = [0, ...a1, 4]

console.log(a4)

/* Objeto */

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 100000, price: 49000, wheels: 4}

const car = {...carName, ...carBrand, ...otherInfos }

console.log(car)