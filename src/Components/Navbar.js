import '../Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = ({ onToggle }) => {
  return (
    <nav className="navbar">
        
        <div className="navbar-links2" font-weight="bold"><Link to= '/website'>
                <li><a href='#'>Car Sale Platform</a></li>
            </Link></div>
        <div className='navbar-links'>
            <ul>
            <Link to= '/stats'>
                <li><a href='#'>Market Statistics</a></li>
            </Link>
            <Link to= '/sell'>
                <li><a href='#'>Sell a Car</a></li>
              </Link>
            <Link to= '/shop'>  
                <li><a href='#'>Browse Cars</a></li>
            </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
