import React from 'react';
import './Menu.css';

var Menu = () => {
    return(
        <nav className="principal">
        <ul>
           <li>
            <a href="postagens">Postagens</a>
          </li>
   
          <li>
            <a href="albuns">Albuns</a>
          </li>
   
          <li>
            <a href="to-dos">To-Dos</a>
          </li>
        </ul>
    </nav> 
    );
}

export default Menu;