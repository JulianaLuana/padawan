import React from 'react';
import './ToDos.css'


var ToDos = () => {
    return(
        <section>
            <h1> To-Dos </h1>
            <div className="listas">
                <ul className="to-do">
                    <li>Compras:</li>
                    <li> <input type="checkbox"/> Arroz - 2kg</li>
                    <li> <input type="checkbox"/> Feijão - 1kg</li>
                    <li> <input type="checkbox"/> Macarrão - 2pcts</li>
                </ul>

                <ul className="to-do">
                    <li>Afazeres Domésticos:</li>
                    <li> <input type="checkbox"/> Lavar Roupa</li>
                    <li> <input type="checkbox"/> Lavar Louça</li>
                    <li> <input type="checkbox"/> Arrumar Camas</li>
                </ul>

                <ul className="to-do">
                    <li>Trabalho Escolar:</li>
                    <li> <input type="checkbox"/> Realizar Pesquisa</li>
                    <li> <input type="checkbox"/> Organizar pesquisa em tópicos</li>
                    <li> <input type="checkbox"/> Montar apresentação</li>
                </ul>
            </div>
        </section>
    );
}

export default ToDos;