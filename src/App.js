import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Componant/About/About";
import Header from "./Componant/Header/Header";
import Inventory from "./Componant/Inventory/Inventory";
import Login from "./Componant/Login/Login";
import Orders from "./Componant/Orders/Orders";
import RequireAuth from "./Componant/RequireAuth/RequireAuth";
import Shipment from "./Componant/Shipment/Shipment";
import Shop from "./Componant/Shop/Shop";
import SignUp from "./Componant/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/shipment" element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
