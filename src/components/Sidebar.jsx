import { useEffect, useState} from "react"
import { Link } from "react-router-dom"

function Sidebar() {

  const [pokeList, setPokeList] = useState(null)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((response)=>{
      console.log(response.results)
      setPokeList(response.results)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

 // if(!pokeList) return <h3> Loading</h3>

  return (
    <nav className="sidebar">

      <h4>Pokemon</h4>
      {pokeList ? pokeList.map((pokemon, i) => {
        return <Link key = {i} to={`/pokemon-details/${pokemon.name}`}>{pokemon.name}</Link>
      }): <h3> Loading</h3>}
      {/* example of 3 links */}
      <Link to={"/pokemon-details/bulbasaur"}>bulbasaur</Link>
      <Link to={"/pokemon-details/charmander"}>charmander</Link>
      <Link to={"/pokemon-details/squirtle"}>squirtle</Link>

    </nav>
  )
}

export default Sidebar