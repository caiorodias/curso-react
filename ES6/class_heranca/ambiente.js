class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100-discount) / 100)
    }
}

const shirt = new Product("Camisa gola v", 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(20))

const tenis = new Product('Tênis verde', 120) /* Só precisa disso para adicionar outro produto na class */

console.log(tenis.productWithDiscount(20))

// Herança

/* Como herdar atributos para uma classe, de outra classe já pronta */

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price) //O que ja tem na classe-pai
        this.colors = colors //Adicionando novo
    }

    showColors() {
        console.log('As cores são:')
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes('Chapéu', 29.99, ['Preto', 'Azul', 'Verde'])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors()