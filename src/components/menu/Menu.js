import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

var Menu = () => {
    return(
        <nav className="principal">
        <ul>
           <li>
               <Link to="/postagens">Postagens</Link>
          </li>
   
          <li>
              <Link to="/albuns">Albuns</Link>
          </li>
   
          <li>
              <Link to="/to-dos">To-Dos</Link>
          </li>
        </ul>
    </nav> 
    );
}

export default Menu;