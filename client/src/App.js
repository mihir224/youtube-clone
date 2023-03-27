import './App.css';
import Searchbar from './components/Searchbar';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
    <Searchbar/>
    <div id="body-section">
    <Navbar/>
    <div id="cards">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
    </div>
  );
}

export default App;
