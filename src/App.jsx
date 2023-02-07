import { useEffect, useState } from "react";
import { obtenerTodo, obtenerPersonaje } from "./funciones";


function App() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1")
  const [siguiente, setSiguiente] = useState(null)
  const [anterior, setAnterior] = useState(null)
  const [paginas, setPaginas] = useState(null)
  const [total, setTotal] = useState(null)
  const [personajes, setPersonajes] = useState(null)
  const [personaje, setPersonaje] = useState(null)


  const next = (url) => {
    setUrl(url)
  }
   
  const prev = (url) => {
    setUrl(url)
  }


  useEffect(() => {
    obtenerTodo(url, setSiguiente, setAnterior, setTotal, setPaginas, setPersonajes)

  }, [url])
  // eslint-disable-next-line
  return (
    <div className="container text-center mt-5">
      <div className="row align-items-start">
        <div className="col-md-6">
          <h2 className="text-success">Bienvenidos a la app de Ricky & Morty</h2>
          <p className="text-warning">Total personajes: {total}</p>
          <p className="text-warning">Cantidad de Páginas: {paginas}</p>
          {anterior !== null ? (
            <button onClick={() => prev(anterior)} className="btn btn-dark m-2">Anterior</button>
          ) : ('')}
          {siguiente !== null ? (
            <button onClick={() => next(siguiente)} className="btn btn-success m-2">Siguiente</button>
          ) : ('')}

          <div>
            {personajes !== null ? (
              personajes.map(personaje => (
                <p onClick={() => obtenerPersonaje(personaje.id, setPersonaje)} className="btn btn-danger m-2 btn-sm">{personaje.name}</p>
              ))
            ) : ('')}
          </div>

        </div>
        <div className="col-md-6">
          {personaje !== null ? (
            <div>
              <h2 className="text-success">{personaje.name}</h2>
              <img src={personaje.image} alt="rickymorty" className="rounded shadow-lg mt-3"/>
            </div>
          ) : ('')}
        </div>
      </div>
    </div>
  );
}

export default App;
