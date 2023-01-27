const sum = function sum(a,b){
    return a + b
}

const arrowSum = (a, b) => a + b

/* Só fica tudo na mesma linha se for só uma linha de execução */

console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        return 'Olá ' + name + '!'
    } else {
        return 'Olá!'
    }
}

console.log(greeting('Caio'))

console.log(greeting())

const testeArrow = () => console.log('testou!')

testeArrow()

const user = {
    name: "Caio",
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(this)
            console.log('Username: ' + self.name)
        }, 500) /* tempo para executar a função(meio seg) */
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 500)
    }
}

user.sayUserName()
user.sayUserNameArrow()