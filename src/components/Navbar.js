import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
  const [click, setClick] = useState(false); {/* this uses useState and defines the click className for the menu icons. this changes the different states of the menu icon */}
  
  const changeClick = () => setClick(!click); // when you click on the icon, it changes to whatever useState is not. if the above line is false then this line is true
  
  const closeMobileMenu = () => setClick(false);
  
  const [button,setButton] = useState(true);
  const showButton = () => 
  {
    if(window.innerWidth <= 960){setButton(false);} else{setButton(true);}
  };

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>

            <Link to='/' className='navbar-title' onClick={closeMobileMenu}> {/* link reaplces the <a> in html. can change link to image later on */} 
            Biomechatronics <i className='fa-solid fa-heart-circle-bolt'/> {/* i think this is to connect the link to font awesome */}
            </Link>

            <div className='menu-icon' onClick={changeClick}>
            <i className={click ? 'fas fa-times' : "fas fa-bars"}/> {/* the true (else) false is " " : " ". if you click on the hamburger icon once itll look one way and then when you click on it again itll look another way */}
            </div> 

            <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/* makes the nav menu disappear when you click on an option in the nav menu. */}
             {/* creating the list of items in the menu bar */}

              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}> {/* the '/' denotes the home page. but generally you put a '/name_of_link' */}
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}> {/* i think this also does the stuff to close the menu */}
                About Us
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}> {/* i think this also does the stuff to close the menu */}
                Our Projects
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/join' className='nav-links' onClick={closeMobileMenu}> {/* i think this also does the stuff to close the menu */}
                Join the Team
                </Link>
              </li> 

            </ul> {/* button component goes here */}

            {/* the && shortcut will return true whatever is after it. creating a state for the Button component. the HOME is the children of the button. automatically making the Home button outline so its customized */} 
            {/* { button && <Button buttonStyle='btn--outline'> 
            </Button>} */}
            
        </div>
    </nav>
    </>
  );
}

export default Navbar