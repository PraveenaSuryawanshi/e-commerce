
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
        <Route path='/e-commerce/' extact element={<Home/>} />
        <Route path="/e-commerce/home"  element={<Navigate replace to="/e-commerce/home" />}></Route>
        <Route path='/products' element={<Product/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/cardItem' element={<CardItem/>}/>
        <Route path='/products/singleItem/:id' extact element={<SingleItem/>}></Route>
        <Route path='/products/singleItem/' element={<Navigate to="/products/singleItem/1" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
