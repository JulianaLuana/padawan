import React from 'react';
import './ToDos.css'

var todosList = [ {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      }
]

var ToDos = () => {
    return(
        <section>
            <h1> To-Dos </h1>
            <div className="box">
            <ul className="to-do">
                    {
                        todosList.map( x => {
                            return (
                            <li key={x.id}>
                                <input type="checkbox"/> {x.title}
                            </li>
                        ) } )
                    }  
                </ul>
            </div>
        </section>
    );
}

export default ToDos;