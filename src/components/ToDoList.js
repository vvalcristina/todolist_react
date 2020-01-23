import React, {Component} from "react";
import ToDoItems from "./ToDoItem"

class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = { items: [] };
    
        this.addItem = this.addItem.bind(this);
        this.delItem = this.delItem.bind(this);
}

addItem(e) {
    if(this._inputElement.value !== "") {
      var novoItem = {
        //o objeto contém o texto digitado no input e um valor único para cha
        text: this._inputElement.value
      };
    //setando a propriedade items do state
    this.setState((prevState) => {
      return {
       items: prevState.items.concat(novoItem)
      };
    });
    //limpando o input para receber o próximo elemento
    this._inputElement.value = ""
  }

  console.log(this.state.items);
  //com a linha abaixo, é feita a sobrescrita do behavior default desse evento
   e.preventDefault();
}

delItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input  ref={(a) => this._inputElement = a}
                    placeholder="digite uma tarefa">
            </input>
            <button type="submit"><i className="fas fa-plus">Add</i></button>
          </form>
        </div>
        <ToDoItems entries={this.state.items}
                   del={this.delItem}/>
      </div>
    );
  }
}

export default ToDoList;