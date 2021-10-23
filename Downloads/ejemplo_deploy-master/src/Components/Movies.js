import React from 'react'
import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Movies (props) {
    return (
        <div className="Cartelera">
            <h3>Cartelera</h3>
            <h5>Precios por clasificación: A=$50 B=$80 C=$95</h5>
                
                {
                    props.cartelera.map((elemento,i)=>{
                        return (
                         <div className="Peliculas" key={i}>
                        
                            <div  className="Poster">
                              <img style={{width:'70%'}}src={elemento.url} alt={elemento.nombre} />
                            </div>
                            
                            <div className="Descripcion">
                                <p>{elemento.nombre}</p>
                                <p>{elemento.idioma}</p>
                                <p>Clasificación: {elemento.clasificacion}</p>
                                <p>{elemento.duracion}</p>
                                <div className="Horarios">
                                  {elemento.horarios.map((h,ind)=>
                                  <Button variant="dark" key={ind} onClick={()=>props.agregar(elemento,h)} style={{  margin:'1vmin'}}>{h}</Button>)}
                                </div>
                            </div>
                          </div>)
                   
                    })
                }
              
            </div>
        )

}