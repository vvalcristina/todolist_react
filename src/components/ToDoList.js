import React, {Component} from "react";
import ToDoItems from "./ToDoItem"

class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = { items: [] };
    
        this.adicionarItem = this.adicionarItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
}

adicionarItem(event) {
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
  }
  console.log(this.state.items);
   event.preventDefault();
}

deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  });

  this.setState({
    items: filteredItems
  });
}

  render() {
    return (
      <div className="todoListMain">
       <h1>Lista de Tarefas</h1>       
        <div className="header">
          <form onSubmit={this.adicionarItem}>
            <input  ref={(a) => this._inputElement = a} placeholder="Digite sua tarefa">
            </input>
            <button type="submit"><b className="fas fa-plus">Adicionar</b></button>
          </form>
        </div>
        <ToDoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}

export default ToDoList;