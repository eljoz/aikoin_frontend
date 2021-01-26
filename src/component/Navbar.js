import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from '../../src/img/aikon_logo.jpeg'

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return {
    //   window.removeEventListener('resize', showButton)
    }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
             <div className='text-logo'>
              <table>
                <tr>
                  <td rowSpan='2'><img className='img-tag' src={logo} alt='website logo'/>
                  </td>
                  <td><li className='logo-text-1' style={{listStyle:'none'}}>AIKON</li></td>
                </tr>
                <tr>
                  <td className='logo-text-2' >INVESTMENTS</td>
                </tr>
              </table>
                
              </div>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-item'>
              <Link
                to='/Partners'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Partners
              </Link>
            </li>
            <li className='nav-item'>
            <Link
              to='/investors'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Investors
            </Link>
          </li>
          {props.isAuthenticated ?
            <li className='nav-btn'>
                {button ? (
                  <Link to='/login' className='btn-link'>
                    <Button buttonStyle='btn--outline primary'>Connect</Button>
                  </Link>
                ) : (
                  <Link to='/signout' className='btn-link'>
                    <Button
                      // buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      LogOut
                    </Button>
                  </Link>
                )}
              </li> :
              <li className='nav-btn'>
                {button ? (
                  <Link to='/login' className='btn-link'>
                    <Button buttonStyle='btn--outline primary'>Connect</Button>
                  </Link>
                ) : (
                  <Link to='/login' className='btn-link'>
                    <Button
                      // buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Connect
                    </Button>
                  </Link>
                )}
              </li>}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
