import React, {useState} from 'react';
import { Link } from 'gatsby';
import { FiAlignJustify } from 'react-icons/fi';
import Logo from "../assets/images/logo.svg";

const Navbar = () => {

  const [show, setShow] = useState(false);
    
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
                <Link to='/'>
                    <img src={Logo} alt='logo' />
                </Link>
                <button className='nav-btn' onClick={ ()=> setShow(!show) }>
                    <FiAlignJustify />
                </button>
            </div>
            <div className={show ? "nav-lnks show-links" : "nav-links" }>
                <Link to='/' className='nav-link' activeClassName='active-link' onClick={ ()=>setShow(false) }> 
                    Home
                </Link>
                <Link to='/about' className='nav-link' activeClassName='active-link' onClick={ ()=>setShow(false) }>
                    About
                </Link>
                <Link to='/recipies' className='nav-link active' activeClassName='active-link' onClick={ ()=>setShow(false) }> 
                    Recipes
                </Link>
                <Link to='/tags' className='nav-link active' activeClassName='active-link' onClick={ ()=>setShow(false) }>
                    Tags
                </Link>
                <div className='nav-link contact-link'>
                    <Link to='/contact' className='btn' onClick={ ()=>setShow(false) }> 
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar