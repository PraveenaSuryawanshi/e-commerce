
import './App.css';
import { BrowserRouter as Router,Routes,Route , Navigate } from 'react-router-dom';
import './css/tooplate-main.css';
import './css/flex-slider.css';
import './css/owl.css';
import Navbar from './container/navbarContainer';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Product from './pages/products';
import SingleItem from './container/homeContainer';
import CardItem from './pages/cartItem';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/e-commerce' extact element={<Home/>} />
        <Route path="/home"  element={<Navigate replace to="/e-commerce" />}></Route>
        <Route path='/e-commerce/products' element={<Product/>} />
        <Route path='/e-commerce/about'  element={<About/>} />
        <Route path='/e-commerce/contact' element={<Contact />}/>
        <Route path='/e-commerce/cardItem' element={<CardItem/>}/>
        <Route path='/e-commerce/products/singleItem/:id' extact element={<SingleItem/>}></Route>
        <Route path='/e-commerce/products/singleItem/' element={<Navigate to="/e-commerce/products/singleItem/1" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
