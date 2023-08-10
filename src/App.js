import { Route, Routes } from "react-router-dom";
import Home from "./commponents/Home";
import About from "./commponents/About";
import Navbar from "./commponents/Navbar";
import Sidebar from "./commponents/Sidebar";
import All from "./commponents/All";
import Add from "./commponents/Add";
import ProductDetlise from "./commponents/ProductDetlise";
import Edit from "./commponents/Edit";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='row width100vw'>
        <div className='col-2 sidebar'>
          <Sidebar />
        </div>
        <div className='col-10'>
          <div className="container">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path='/All' element={ <All /> } />
              <Route path='/All/Add' element={ <Add /> } />
              <Route path='/All/:productId' element={ <ProductDetlise /> } />
              <Route path='/Edit/:productId' element={ <Edit /> } />
              <Route path="/about" element={ <About /> } />
            </Routes>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
