import logo from './logo.svg';
import './App.css'
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    
    <div className="App">
       <div className='contenedor-principal'>
      <h1 className='titulo-principal'> Alumnos Egresados de Henry</h1>
      <Testimonio
      nombre = 'Angel Aguado '
      pais ='Peru' 
      imaguenes = 'angel'
      cargo = 'Ingeniero de Softwar' 
      empresa='spotify ' 
      Testimonio ='En mi caso la mejor palabra que define el bootcamp junto con 
      lo destacado en la tercera pregunta, es oportunidad. La oportunidad desde el 
      primer momento de estar en contacto con las empresas del sector y poder empezar 
      a forjar tu propia marca y conseguir la entrada directa a un puesto de trabajo 
      caracterizado por la flexibilidad y oportunidad laboral.'
       />

      <Testimonio
      nombre = 'Jhey Castar '
      pais ='Canada' 
      imaguenes = 'jhey'
      cargo = 'Ingeniero de Softwar' 
      empresa=' Amazon' 
      Testimonio ='En mi caso la mejor palabra que define el bootcamp junto con 
      lo destacado en la tercera pregunta, es oportunidad. La oportunidad desde el 
      primer momento de estar en contacto con las empresas del sector y poder empezar 
      a forjar tu propia marca y conseguir la entrada directa a un puesto de trabajo 
      caracterizado por la flexibilidad y oportunidad laboral.'
       />
      <Testimonio
      nombre = 'Emma Bultrans '
      pais ='Austrialia' 
      imaguenes = 'emma'
      cargo = 'Ingeniero de Softwar' 
      empresa='Gogole ' 
      Testimonio ='En mi caso la mejor palabra que define el bootcamp junto con 
      lo destacado en la tercera pregunta, es oportunidad. La oportunidad desde el 
      primer momento de estar en contacto con las empresas del sector y poder empezar 
      a forjar tu propia marca y conseguir la entrada directa a un puesto de trabajo 
      caracterizado por la flexibilidad y oportunidad laboral.' 
      />
      </div>
    </div>
  );
}

export default App;
