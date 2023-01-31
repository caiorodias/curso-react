import MyComponent from "./MyComponent"

const FirstComponent = () => {

    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p className = 'teste'>Meu texto</p>
            <MyComponent /> {/* hierarquia, o apps.js é o pai de todos, o First é o segundo nivel e dentro dele o MyComponent como 3 nivel, porém nada impede de ter o MyComponent no primeiro nivel(app.js) */}
        </div>
    )

}

export default FirstComponent