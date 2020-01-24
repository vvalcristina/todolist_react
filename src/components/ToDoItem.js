import React, {Component} from "react";

class ToDoItems extends Component {
    constructor(props) {
      super(props);
      this.criarTarefa = this.criarTarefa.bind(this);
    } 
    delete(key) {
      this.props.delete(key);
    }
    criarTarefa(item) {
      return <div key={item.key}>
                    <div>
                      <a  onClick={() => this.delete(item.key)}><i className="fas fa-times"></i></a>
                    </div>
                    <div className="texto">{item.text}</div>
             </div>
    }
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.criarTarefa);
      return (
        <ul className="theList">     
            {listItems}       
        </ul>
      );
    }
  };

  export default ToDoItems;