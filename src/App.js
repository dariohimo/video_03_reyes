
import React, {useState} from 'react'

const App = () => {
  const  [contador, setContador] = useState(0);

  const disminuir = () => {
    setContador(contador - 1);

  }

  const aumentar = () => {
        setContador(contador + 1);
    
  }

  const restablecer = () => {
       setContador(0);
    
  }


  return (
    <div> 
      <button onClick={() => setContador(contador -1) } > Disminuir</button>
      <button onClick={aumentar } > Aumentar</button>
      <button onClick={restablecer} >  Restablecer</button>

      <h1>{contador}</h1>

    
    </div>
  )
}

export default App