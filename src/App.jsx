import Cart from './cart.jsx'
import Navbar from './nav.jsx'
import './App.css'
import Home from './home.jsx'
function App() {
  return  <>
  <Navbar/>
  <Home/>
  <div className="pro">
    <h1 className='pro-heading' >Products</h1>
    <div className="cart">
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
    </div>
  </div>
  </>
  
}


export default App;
