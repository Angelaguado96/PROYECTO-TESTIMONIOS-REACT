   import React from 'react';
   import '../hoja-de-stilos/Testimonio.css';   
    
     
   function Testimonio(props){
       return(
         <div  className='contenedor-testimonio'> 
         <img className='imagen-testimonio'
          src= {require(`../componentes/imaguenes/testimonio-${props.imaguenes}.jpg`)} 
           alt='foto de angel'/>
            <div className= 'contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><b>{props.nombre}</b>- {props.pais}</p>
                <p className=' cargo-testimonio'> {props.cargo}en <b>{props.empresa}</b></p>
                <br>
                </br>
                 <p className = 'texto-testimonio '> 
                 {props.Testimonio}</p>
            </div>
        </div> 
       )
   }
 export default Testimonio ;

   