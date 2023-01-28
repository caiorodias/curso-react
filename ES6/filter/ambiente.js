const arr = [1, 2, 3, 4, 5]

/* Precisa criar outra array pq ele não muda a array original */

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
}) /* arrow function sem nome */

console.log(arr)
console.log(highNumbers)

const users = [
    { name: 'Caio', available: true },
    { name: 'Higor', available: false },
    { name: 'Douglas', available: false },
    { name: 'Matheus', available: true },
] /* Objeto */

const availableUsers = users.filter((user) => user.available) /* return implicito pq é uma linha só. Metodo avaliable só da pra usar pq é boolean */
const notAvaliableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvaliableUsers)