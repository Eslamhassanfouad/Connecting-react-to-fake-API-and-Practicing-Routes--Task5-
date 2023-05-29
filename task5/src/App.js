import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Home } from './components/Home';
import { Products } from './components/Products';
import {Routes,Route} from 'react-router-dom'
import { ProductDetails } from './components/ProductDetails';
import { ProductsForm } from './components/ProductsForm';

function App() {
  return (
    <div>
      <MyNav/>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='products' element={<Products/>} />
        <Route path='products/:id' element={<ProductDetails/>} />
        <Route path='products/:id/edit' element={<ProductsForm/>} />
      </Routes>
    </div>
  );
}

export default App;
