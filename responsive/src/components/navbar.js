import React from 'react';
import classes from './navbar.module.css'
 const NavBar=()=>{
     return(
         <nav className={classes.mainnav}>
             <ul>
                 <li>Home</li>
                 <li>About</li>
                 <li>Service</li>
                 <li>Contact</li>
             </ul>
         </nav>
     )
 }

 export default NavBar