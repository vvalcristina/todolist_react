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
  var novoItem= {
    'tarefa':this.refs.tarefa.value,
    'data_inicio':this.refs.data_inicio.value,
    'data_fim':this.refs.data_fim.value,
  }
   

  var vetorItem = this.state.items
  vetorItem.push(novoItem)
  this.setState({items:vetorItem})
  console.log(this.state.items)
  this.refs.form.reset();

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
            <input  ref="tarefa" placeholder="Digite sua tarefa"></input>
            <input ref="data_inicio" type="date" value="2017-06-01"></input>
            <input ref="data_fim" type="date" value="2017-06-01"></input>
            <button type="submit"><b className="fas fa-plus">Adicionar</b></button>
            {this.state.items.map((item,index)=>{
  return <li key={index} onCLick={()=> this.deleteItem(index)}>{item.tarefa}</li>
})}
          </form>
        </div>
      </div>
    )
  }

}
export default ToDoList;
/*
{this.state.items.map((item,index)=>{
  return <li key={index} onCLick={()=> this.deleteItem(index)}>{item}</li>
})}
*/