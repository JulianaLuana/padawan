import React from 'react';
import Paisagem1 from './../../assets/paisagem1.jpeg';
import Paisagem2 from './../../assets/paisagem2.jpeg';
import Paisagem3 from './../../assets/paisagem3.jpeg';
import Edificio1 from './../../assets/edificio1.jpeg';
import Edificio2 from './../../assets/edificio2.jpeg';
import Edificio3 from './../../assets/edificio3.jpeg';
import './Albuns.css';

var Albuns = () => {
    return(
        <section className="Albuns">
            <h1> Albuns </h1>
            <h3> Paisagens </h3>
            <div className="img1"> 
                <img src={Paisagem1 }/>
                <img src={Paisagem2 }/>
                <img src={Paisagem3 }/>
            </div>
            <h3> Arranha-Céu </h3>
            <div className="img2">
                <img src={Edificio1 }/>
                <img src={Edificio2 }/>
                <img src={Edificio3 }/>
            </div>
        </section>
    );
}

export default Albuns;