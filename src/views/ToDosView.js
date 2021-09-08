import React from 'react';
import Menu from './../components/menu/Menu.js';
import ToDos from './../components/to-dos/ToDos.js'

var ToDosView = () => {
    return(
        <div>
        <Menu/>
        <ToDos/>
      </div>
    );
}

export default ToDosView;