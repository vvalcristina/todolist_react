import React, {Component} from "react";
import ToDoItems from "./ToDoItem"


class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          'items': '',
          'data_inicio':'',
          'data_fim':'', 
        };
    
        this.adicionarItem = this.adicionarItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
}

adicionarItem(event) {
  /*
    if(this._inputElement.value !== "") {
      var novoItem = {
        text: this._inputElement.value
      };
    this.setState((prevState) => {
      return {
       items: prevState.items.concat(novoItem)
      };
    });
    this._inputElement.value = ""
  }*/
  if(this._inputElement.value !== ""){
    var novoItem = [{
      'items': this.items.value,
      'hora_inicio': this.hora_inicio.value,
      'hora_fim': this.hora_fim.value
    }]
    return {novoItem}
    
   console.log(this.state.items);
   event.preventDefault();
}

deleteItem(index) {
  console.log(index)
  var cloneItems =Array.from(this.state.items)
  cloneItems.splice(index, 1)
  this.setState({ items: cloneItems });
}

  render() {
    return (
      <div className="todoListMain">
       <h1>Lista de Tarefas</h1>       
        <div className="header">
          <form onSubmit={this.adicionarItem}>
            <input  ref={(a) => this._inputElement = a} placeholder="Digite sua tarefa">
            </input>
            <label for="appt-time">Hora de Início: </label>
        <input id="appt-time" type="time" name="appt-time" value=""></input>
            <button type="submit"><b className="fas fa-plus">Adicionar</b></button>
          </form>
        </div>
        <ToDoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}

export default ToDoList;

