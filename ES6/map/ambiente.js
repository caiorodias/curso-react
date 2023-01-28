const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 400, category: 'Eletro'},
    {name: 'Calça jeans', price: 50.99, category: 'Roupas'},
]

/* Todos os itens que sejam da categoria roupas, fiquem em promoção(sale) */

products.map((product) =>{
    if(product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)