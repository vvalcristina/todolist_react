import React, { Component } from 'react';
//import { Calendar, momentLocalizer } from 'react-big-calendar';
//import moment from 'moment';

class Calendario extends Component{
    constructor(props){
        super(props);
        this.state = { atividades: {
          'nome':'',
          'hora_inicio': '',
          'hora_fim':''
        } }
        this.adicionarAtividade = this.adicionarAtividade.bind(this)
        this.deleteAtividade = this.deleteAtividade.bind(this)
    }
    adicionarAtividade(event){
      event.preventDefault();
      var novaAtividade = {
          'nome': this.refs.atividades.value,
          'hora_inicio': this.refs.atividades.value,
          'hora_fim': this.refs.atividades.value
      }
      
      if(novaAtividade) {          
          console.log(novaAtividade)
          this.refs.form.reset();
      }
  }

    deleteAtividade(index) {
      var cloneAtividades =Array.from(this.state.atividades)
      cloneAtividades.splice(index, 1)
      this.setState({ atividades: cloneAtividades });

    }
    render(){
      return
    }
    }
    
 
