import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Video from './components/Video';
import Search from './components/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div id="body-section">
    <div id="search-body">
    <Searchbar/>
    </div>
   <div id="content">
    <Navbar/>
    <Routes>
      <Route path="/">
        <Route index element={<Home type="random"/>}/>
        <Route path="trending" element={<Home type="trending"/>}/>
        <Route path="search" element={<Search />}/>
        <Route path="subscribed" element={<Home type="subscribed"/>}/>
        <Route path="video">
          <Route path=":id" element={<Video/>}/>
        </Route>
        <Route path="signin" element={<SignIn/>}/>
      </Route>
    </Routes>
    </div>
    
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
