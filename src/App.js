import React, { useState } from 'react'

export function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
      setLinea1( evento.target.value);
  }

  const onChangeLinea2 = function(evento){
      setLinea2(evento.target.value);
  }

  const onChangeImagen = function(evento){
    let imagen = '/img/'+ evento.target.value
    setImagen(imagen);
}

  return (
      <div className='App'>
        <center>
        <select onChange={onChangeImagen}>
          <option value="Captura.png">Prueba 1</option>
          <option value="Captura2.png">Prueba 2</option>
          <option value="Captura3.png">Prueba 3</option>
          <option value="Captura4.png">Prueba 4</option>
        </select>
        <br/><br/>

        <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'></input>
        <br/>
        <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'></input>
        
        <br/><br/>
        <button>Exportar</button>
        <br/>
        <div>
          <span>{linea1}</span> <br/>
          <span>{linea2}</span> <br/> 
          <img src={imagen}/>
        </div>


        </center> 
      </div>
  )
}
