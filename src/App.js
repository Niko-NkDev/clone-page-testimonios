import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Mis testimonios</h1>
        <Testimonio 
        nombre='Sarah Pérez'
        pais='Colombia'
        imagen='1'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.' />
        <Testimonio
        nombre='Ricardo Pelayo'
        pais='Nigeria'
        imagen='2'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.' />
        <Testimonio
        nombre='Luisa Pérez'
        pais='Argentina'        
        imagen='3'
        cargo='Ingeniera de Software'
        empresa='Google'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.' />
      </div>
    </div>
  );
}

export default App;
