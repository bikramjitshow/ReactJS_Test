import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>F CODE !!</h1>
      <Cards></Cards>
      {/* <Card cdata={{title: 'Card A', desc: 'Description of card A'}}></Card> */}
    </div>
  );
}

export default App;
