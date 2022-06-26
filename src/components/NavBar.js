import React from 'react'

function NavBar() {
  return (
    <div className='navbar' onClick="this.classList.toggle('open')">
         <ul>         
             <li><a href="/" data-text="Home">Home</a>
             </li>         
             <li><a href="/" data-text="About">About</a>
             </li>        
             <li><a href="/" data-text="Services">Services</a>
             </li>         
          </ul> 


    </div>
  )
}

export default NavBar