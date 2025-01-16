import './index.css'

function Navbar(){
    return <nav>
        <div className="logo">
            <h1>logo</h1>
        </div>
        <div className="links">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>
}
export default Navbar;