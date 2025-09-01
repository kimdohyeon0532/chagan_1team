
import "./App.css";
import Install from "./install";
import StarRating from "./components/StarRating";
import Cart from "./cart/Cart";
import Login from "./login/Login";

import { Route, Routes } from "react-router-dom";




function App() {
  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>PWA 테스트</h1>
              <Install />
              <StarRating itemId={1} />
              <StarRating itemId={2} />
              <StarRating itemId={3} />
            </>
          }
        ></Route>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />


      </Routes>
    </div>
  );
}

export default App;
