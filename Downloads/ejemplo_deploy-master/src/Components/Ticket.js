import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ticket = (props) => {
    return ( 
        <div className="Lista">
          {
            Object.keys(props.compra).length!==0
          
           ?
            <div>
                <h3>Compra</h3>
                <div className="Ticket">
                  <p>{props.compra.nombre}</p>
                  <p>Hora:{props.compra.horario}</p>
                  <p>Cantidad: <input type='number'  className="text-center" style={{width: '15vmin'}} value={props.compra.cantidad} min="1" max="10" onChange={e=>props.calcular(e.target.value,props.compra)}/></p>
                  <p>Total: ${(props.compra.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                  
                  <div className="Botones">
                    <Button onClick={()=>props.eliminarCompra()}variant="danger">Cancelar</Button> 
                    <Button onClick={()=>props.comprar(props.compra)}variant="success">Comprar</Button> 
                  </div>
                </div> 
            </div> 
            
            :
              <div className="Aviso">
                <p>Seleccione película dando click en el horario</p>
              </div>

            }
          </div>
     );
}
 
export default Ticket;