
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Order from './components/Order';
import Nomatch from './components/Nomatch';
import Product from './components/Product';
import Feature from './components/Feature';
import New from './components/New';

function App() {
  return (
    <div >
      <Nav />
      <Routes>
       
        <Route path='/' element={ <Home/>}/>
        <Route path='about' element={<About />}/>
        <Route path='order-summary' element={<Order/>}/>
        <Route path='*' element={<Nomatch/>}/>
        <Route path='products' element={<Product/>}>
          <Route index element={<Feature/>}/>
          <Route path='featured' element={<Feature/>}/>
          <Route path='new' element={<New/>}/>
        </Route>



      </Routes>


    </div>
  );
}

export default App;
