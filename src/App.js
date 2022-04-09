import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componant/About/About';
import Header from './Componant/Header/Header';
import Inventory from './Componant/Inventory/Inventory';
import Orders from './Componant/Orders/Orders';
import Shop from './Componant/Shop/Shop';

function App() {
  return (
    <div>
     <Header></Header>

     <Routes>
      <Route path='/' element={<Shop></Shop>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/orders' element={<Orders></Orders>}></Route>
      <Route path='/about' element={<About></About>} ></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>

     </Routes>
     {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
