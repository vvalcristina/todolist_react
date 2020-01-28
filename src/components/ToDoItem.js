import React, {Component} from "react";

class ToDoItems extends Component {
    constructor(props) {
      super(props);
      this.criarTarefa = this.criarTarefa.bind(this);
    } 

    delete(index) {
      console.log(index)
      this.props.delete(index);
    }

    criarTarefa(item, index) {
      return <div key={index}>
                    <div>
                      <a  onClick={() => this.delete(index)}>
                      X {item.text},
                      {}
                        {}
                      </a>
                    </div>
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