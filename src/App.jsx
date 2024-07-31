import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ShopContextProvider from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
