import { Link } from 'react-router-dom';
import './navbar.css';



export const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">Property Finder.com</span>
        </Link>
        
      </div>
    </div>
  );
};
