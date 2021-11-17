
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Somando dois números naturais</h1>
      
      <div className="soma">
       <input type="text" className="app-number" placeholder="Número"></input>
       <br></br>
       <input type="text" className="app-number" placeholder="Número"></input>
      <br></br>
      </div>
       <button className="app-button"> + </button>
       <p className="resultado"> </p>
       </header>
    </div>
  );
}

export default App;
