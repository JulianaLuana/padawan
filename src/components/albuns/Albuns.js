import React from 'react';
import './Albuns.css';

var albunsList = [
    {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "omnis laborum odio"
    }
]

var Albuns = () => {
    return(
        <section className="Albuns">
            <h1> Albuns </h1>
            <ul>
            {
            albunsList.map(x => {
                return (
                    <li className="listagem">
                        <a href={'/albuns/'+x.id}>{x.title}</a>
                    </li>
                )
            })}
            </ul>
        </section>
    );
}

export default Albuns;