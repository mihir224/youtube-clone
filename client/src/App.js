import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Video from './components/Video';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
    <div id="body-section">
    <Navbar/>
    <div id="search-body">
    <Searchbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="video">
        <Route path=":id" element={<Video/>}></Route>
      </Route>
      <Route path="signin" element={<SignIn/>}></Route>
    </Routes>
    </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
