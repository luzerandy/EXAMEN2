import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Movies from './Components/Movies';
import Ticket from './Components/Ticket';

class App extends Component {
  constructor() {
    super();
    this.state = {
      compra:{},
      cartelera:[
        {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
        {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
        {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
        {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
      ],
    };
 
  }
  
  agregar=(pelicula,horario)=>{
    const temporal=
    {
      codigo:pelicula.codigo,
      nombre:pelicula.nombre, 
      idioma:pelicula.idioma, 
      clasificacion:pelicula.clasificacion,
      horario:horario,
      cantidad:0,
      duracion:pelicula.duracion,
      total:0
    }
    this.setState({
    ...this.state,
    compra:temporal
    })
  }
 
  calcular=(elemento,pelicula)=>{

    let precio;
    if(pelicula.clasificacion==='A')
      precio=50;
    if(pelicula.clasificacion==='B')
      precio=80;      
    if(pelicula.clasificacion==='C')
      precio=95;

    const temporal={
      codigo:pelicula.codigo,
      nombre:pelicula.nombre, 
      idioma:pelicula.idioma, 
      clasificacion:pelicula.clasificacion,
      horario:pelicula.horario,
      cantidad:elemento,
      duracion:pelicula.duracion,
      total:elemento*precio
    }

    this.setState({
      ...this.state,
      compra:temporal,
    })

  }
  
  eliminarCompra=()=>{
    this.setState({
      ...this.state,
      compra:[],
    })

  }  
  
  comprar=(pelicula)=>{
    if(pelicula.cantidad<=0){
      <h3>Seleccione boletos.</h3>
    }
    else if(pelicula.cantidad>0){
      <h3>Compra de boletos realizada.</h3>
    }   
      this.setState({
        ...this.state,
        compra:[],
      })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          
          <Movies
            cartelera={this.state.cartelera}
            agregar={this.agregar}
          />

          <Ticket
            compra={this.state.compra}
            calcular={this.calcular}
            eliminarCompra={this.eliminarCompra}
            comprar={this.comprar}
          />
        </div>
      </div>
    )
  }
}
export default App;

/*
Librerias instaladas:
npm install react-bootstrap bootstrap
npm install --save prop-types
npm install --save gh-pages

Para eliminar el .git 
rm -rf .git
*/