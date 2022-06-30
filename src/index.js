import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Componente ({titulo, contenido}){
  
  return(
    <div>
<h1>{titulo}</h1>
<div>{contenido} </div>
</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Componente titulo = "titulo2" contenido= "hola desde REACT"/> 


);



