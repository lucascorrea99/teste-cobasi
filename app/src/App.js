import logo from './logo.svg';
import logoCobasi from './logo-cobasi.svg';
import './App.css';

function App() {
  return process.env.NODE_ENV === 'production' &&
  process.env.REACT_APP_COBASI === 'true'
   ? (
    <div className="App">
      <header className="App-header">
        <img src={logoCobasi} className="App-logo-cobasi" alt="logo" />
        <p>
          Essencial para a Vida.
        </p>
        <a
          className="App-link"
          href="https://www.cobasi.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse
        </a>
      </header>
    </div>
  ) : (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
