//components
import FirstComponent from './components/FirstComponent'; /* Por ser um arquivo .js não precisamos colocar a extensão ao final */

// styles / CSS
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
    </div>
  );
}

export default App;
