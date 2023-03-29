import './App.css';
import Searchbar from './components/Searchbar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Video from './components/Video';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Searchbar/>
    <div id="body-section">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="video">
        <Route path=":id" element={<Video/>}></Route>
      </Route>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
