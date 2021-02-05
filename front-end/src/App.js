import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Menu from './components/menu'

function App() {
  const [inputFrutas, setInputFrutas] = React.useState("")
  const [inputTitulo, setInputTitulo] = React.useState("")

  const frutas = useSelector((state) => state.frutasReducer.frutas)
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo)

  const dispatch = useDispatch()

  function adicionarFruta(event){
    event.preventDefault()

    const objFruta = {
      nome: inputFrutas
    }

    dispatch({type: "ADICIONAR", value:objFruta})

  }

  function alterarTitulo(event){
    setInputTitulo(event.target.value)
    dispatch({type: "ALTERAR", value: event.target.value })
  }

  return (
    <div>
      <Menu/>
      <form>
        <label>Titulo</label>
        <input
         placeholder="Digite o titulo"
          value={inputTitulo}
          onChange={alterarTitulo}/>
      </form>

      <h1>{stateTitulo}</h1>

      <form onSubmit={adicionarFruta}>

        <input
          placeholder="digite uma fruta..." value={inputFrutas} 
          onChange={(event) => setInputFrutas(event.target.value)}
          />

          
      <button>
        ENVIAR
      </button>

      </form>

    
    {

    frutas.map((fruta, index) => {
    return (
    <li key={index}>{fruta.nome}</li>
    )
    })
  }
   </div>
  );
}

export default App;
