import React, {Component} from "react";

class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = { items: [] };

        this.adicionarItem = this.adicionarItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
}


adicionarItem(event) {
  event.preventDefault();
  var novoItem = this.refs.items.value;
  //console.log(items)
  
  if(novoItem) {
    var vetorItem = this.refs.items.value;
    this.setState({items:vetorItem})
}
}
deleteItem(index) {
  var cloneItems =Array.from(this.state.items)
  cloneItems.splice(index, 1)
  this.setState({ items: cloneItems });
}

  render() {
    return (
      <div className="todolist">
       <h1>Lista de Tarefas</h1>       
        <div className="header">
          <form ref="form" onSubmit={this.adicionarItem} >
            <input  ref={(a) => this._inputElement = a} placeholder="Digite sua tarefa"></input>
            <button type="submit"><b className="fas fa-plus">Adicionar</b></button>

            {this.state.items.map((item,index)=>{
              return <li key={index} onCLick={()=> this.deleteItem(index)}>{item}</li>
            })}
          </form>
        </div>
      </div>
    )
  }

}
export default ToDoList;