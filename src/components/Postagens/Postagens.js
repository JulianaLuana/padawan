import React from 'react';
import './Postagens.css';
import Tecnologia from './../../assets/tecnologia1.jpeg';

var Postagens = () => {
    return(
        <section>
            <h1>Postagens</h1>
            <div className="postagem">
                <p> "Não deixe o barulho da opinião dos outros abafar sua voz interior. 
                E mais importante, tenha a coragem de seguir seu coração e sua intuição. 
                Eles de alguma forma já sabem o que você realmente quer se tornar. 
                Tudo o mais é secundário."</p>
                <div className="text-right">
                    <span >Steve Jobs</span>
                </div>
                <ul>
                    <li>#tecnologia</li> 
                    <li>#jobs</li> 
                    <li>#frasestecnologia</li> 
                    <li>#stevejobs</li> 
                    <li>#motivação</li>
                </ul>
                <div className="text-right">
                <span>Postado a 55 minutos...</span>
                </div>
            </div>

            <div className="postagem">
                <img src={Tecnologia }/>
                <ul>
                    <li>#tecnologia</li> 
                    <li>#conectividade</li> 
                    <li>#network</li> 
                    <li>#informatica</li> 
                </ul>
                <div className="text-right">
                <span>Postado a uma semana...</span>
                </div>
            </div>

            <div className="postagem">
                <p>"As pessoas não sabem o que querem, até mostrarmos a elas." </p>
                <div className="text-right">
                    <span >Steve Jobs</span>
                </div>
                <ul>
                    <li>#tecnologia</li> 
                    <li>#insight</li> 
                    <li>#network</li> 
                    <li>#jobs</li> 
                </ul>
                <div className="text-right">
                <span>Postado a duas semana...</span>
                </div>
            </div>
        </section>
    );
}

export default Postagens;