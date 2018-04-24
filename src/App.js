import React, { Component } from 'react'
import logo from './cart.png'
import ModalIngreso from './Modal/ModalIngreso'
import Axios from 'axios'

import './App.css'

import FilmList from './FilmList/FilmList'

class App extends Component {

  state = {
    loading: true,
    films: [],
    isOpen: false
  };

  toggleModal = () => {

    this.setState({

      isOpen: !this.state.isOpen

    });
  }

  fetchFilms(){
    Axios.get('http://localhost:8081/mingeso-backend/producto/all')
    .then(response => {
      console.log(response);
      this.setState({films:response.data});
    })
    .catch(function (error) {
      console.log(error)
    })
  }


 componentDidMount(){
    this.fetchFilms()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo-cart" src={logo} alt="logo" />
          <h1 0className="App-title">Bienvenido a la tienda virtual </h1>
          <button className="button-crear" onClick={this.toggleModal}> Nuevo ingreso </button>
          <ModalIngreso className="Modal"  show={this.state.isOpen} onClose={this.toggleModal} > </ModalIngreso>
        </header>
        <div className="App-intro">
          <FilmList films = {this.state.films} color = {this.state.color} />
        </div>
      </div>
    )
  }


}

export default App
