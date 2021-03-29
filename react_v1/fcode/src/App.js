import './App.css';
import Header from './components/Header';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>F CODE !!</h1>
      <Card title="Card A"></Card>
      <Card title="Card B"></Card>
    </div>
  );
}

export default App;
