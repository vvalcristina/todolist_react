import React, {Component} from "react";

class ToDoItems extends Component {
    constructor(props) {
      super(props);
      this.criarTarefa = this.criarTarefa.bind(this);
    }
  
    del(key) {
      this.props.del(key);
    }
  
    criarTarefa(item) {
      return <li key={item.key}>
                    <div>
                      <a  onClick={() => this.del(item.key)}>
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                    <div className="texto">{item.text}</div>
             </li>
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