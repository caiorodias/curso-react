//components
import FirstComponent from './components/FirstComponent'; /* Por ser um arquivo .js não precisamos colocar a extensão ao final */

// styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
    </div>
  );
}

export default App;
