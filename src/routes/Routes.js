import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import PostagensView from '../views/PostagensView';
import AlbunsView from '../views/AlbunsView';
import ToDosView from '../views/ToDosView';
import PhotosView from '../views/PhotosView';

var Routes = () => {
    return(
      <BrowserRouter>
        <Switch> 
            <Route path="/" render={() => <Menu/>} exact/>
            <Route path="/Postagens" render={() => <PostagensView/>} exact/>
            <Route path="/Albuns" render={() => <AlbunsView/>} exact/>
            <Route path="/Albuns/:id" render={() => <PhotosView/>} exact/>
            <Route path="/To-Dos" render={() => <ToDosView/>} exact/>
            <Route path="*" render={() => <h1> 404 - Not Found </h1>} exact/>
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;