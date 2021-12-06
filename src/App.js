
import './App.css';
import {useState} from 'react';



function App() {

 const [valor, setValor] = useState()

  const handleSubmit= (e) => {
    e.preventDefault();  
    setValor(parseFloat(e.target.number1.value) + parseFloat(e.target.number2.value));
    console.log(e.target.number1.value)
  }

  return (
    <div className="App">
      <section className="aplicacao">
      <h1>Somando dois números naturais</h1>
      <form onSubmit={handleSubmit}>
      <div className="soma">      
       <input type="text" className="app-number" placeholder="Número" name="number1"/>
       
       <input type="text" className="app-number" placeholder="Número" name="number2"/>
      
      </div>
       <button type="submit" className="app-button"> + </button>       
       </form>
       {valor && <h1>{valor}</h1>}
       </section>
  
    </div>
  );
}

export default App;
