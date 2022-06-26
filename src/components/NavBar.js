import React from 'react';
import {Link} from "react-router-dom";


function NavBar() {
  return (
    <div className='navbar'>
         <ul>         
             <li>
           
             <Link to="/">
             <a href="/" data-text="Home">Home</a>
            </Link>
             </li>     

             <li>
             <Link to="/about">
             <a href="/about" data-text="About">About</a>
            </Link>
             </li>      

             <li>
             <Link to="/services">
            <a href="/services" data-text="Services">Services</a>
             </Link>
             </li>         
          </ul> 


    </div>
  )
}

export default NavBar