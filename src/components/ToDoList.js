import React, {Component} from "react";

export default class ToDoList extends Component {

    render(){
        return (
            <div className="Tarefas">
                <div className="header">
                    <form>
                        <input placeholder="Digite a tarefa">
                        </input>
                        <button type="submit">Adicionar</button>
                    </form>
                </div>
            </div>
            
        )
    }

}