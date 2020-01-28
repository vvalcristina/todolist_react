import React, { Component } from 'react';
//import { Calendar, momentLocalizer } from 'react-big-calendar';
//import moment from 'moment';

class Calendario extends Component{
    constructor(props){
        super(props);
        this.state = { atividades: []}
        this.adicionarAtividade = this.adicionarAtividade.bind(this)
        this.deleteAtividade = this.deleteAtividade.bind(this)
    }
    adicionarAtividade(event){
      event.preventDefault();
      var novaAtividade = [
        this.refs.items.value,
        this.refs.hora_inicio.value,
        this.refs.hora_fim.incio,
      ]
      
      if(novaAtividade) {          
         var vetorItem = this.state.atividades.concat(novaAtividade)
         this.setState({atividades:vetorItem})
        this.refs.form.reset();
      }
  }

    deleteAtividade(index) {
      var cloneAtividades =Array.from(this.state.atividades)
      cloneAtividades.splice(index, 1)
      this.setState({ atividades: cloneAtividades });

    }
    render(){
      return(
        <div className="ToDoList">
          OI
        </div>
      )
    }
}
export default Calendario
    

