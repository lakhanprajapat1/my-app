import Cart from './cart.jsx'
import Navbar from './nav.jsx'
import './App.css'
import Home from './home.jsx'
function App() {
  return  <>
  <Navbar/>
  <Home/>
  <div className="pro">
  <Cart/>
  <Cart/>
  </div>
  </>
  
}


export default App;
