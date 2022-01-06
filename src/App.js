import html2canvas from 'html2canvas';
import React, { useState } from 'react'
import style from './app.css'
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

  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      document.body.appendChild(canvas);
  });
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

        <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'></input>
        <br></br>
        <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'></input>
        
        <br/><br/>
        <button onClick={onClickExportar}>Exportar</button>
        <br/>

        <div className='meme' id='meme'>
          <span>{linea1}</span> <br/>
          <span>{linea2}</span> <br/> 
          <img src={imagen}/>
        </div>


        </center> 
      </div>
  )
}
