import '../Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = ({ onToggle }) => {
  return (
    <nav className="navbar">
        
        <div className="brand-title">CarSales</div>
        <a href='#' className='toggle-button' onClick={onToggle} >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </a>
        <div className='navbar-links'>
            <ul>
            <Link to= '/website'>
                <li><a href='#'>Home</a></li>
            </Link>
            <Link to= '/website'>
                <li><a href='#'>Sell</a></li>
              </Link>
            <Link to= '/shop'>  
                <li><a href='#'>Browse</a></li>
            </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
