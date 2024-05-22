import './App.css';
import NavBar from './components/NavBar.js';
import  Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import Blog from "./components/Blog.js";
import Footer from "./components/Footer.js";
import Special from "./components/Special.js";
import FablabGaurantee from './components/FablabGaurantee.js';
import NavBarSubCat from './components/NavBarSubCat.js';
import { Route, Router, Routes } from 'react-router-dom';
import Bracelets from './routes/Bracelets.js';
import Rings from './routes/Rings.js';
import Necklace from './routes/Necklace.js';
import Earrings from './routes/Earrings.js';

function App() {
  return (
    <div className="App">
    
    <div className="home-container">
    
      <NavBar/>
      <NavBarSubCat/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/rings' element={<Rings/>}></Route>
        <Route path='/necklace' element={<Necklace/>}></Route>
        <Route path='/earrings' element={<Earrings/>}></Route>
        <Route path='/bracelets'element={<Bracelets/>}></Route>
        
      </Routes>

      <Footer></Footer>
      
      </div>
    </div>
  );
}

export default App;
