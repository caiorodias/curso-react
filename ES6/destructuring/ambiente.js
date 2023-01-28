const fruits = ['Maça', 'Laranja', 'Mamão']

const [f1, f2, f3] = fruits /* Array */

console.log(f1)
console.log(f3)

const productDetails = {
    name: 'Mouse',
    price: 39.99,
    category: 'Periféricos',
    color: 'Cinza'
} /* Object */

const {name: productName, price, category: productCategory, color} = productDetails
/* Se deseja deixar o nome da variável igual o do dado, basta repetir,
   Se quiser mudar, só colocar name: novoNome */

console.log(`O nome do produto é ${productName}, custa R$${price}, é um ${productCategory} da cor ${color}`)