import { useEffect, useState } from "react";
import axios from "axios";
import { useParams , useNavigate } from "react-router-dom";

function PokemonDetails() {
  const params = useParams()
  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [params.pokemonName]);
  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`,
      );
      console.log(response);
      setPokemon(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      navigate("/error")
    }
  };
  if (isLoading) return <h2>is loading</h2>;
  return (
    <div>
      <h2>Pokemon Details</h2>

      <h1>{pokemon.name}</h1>

      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt="pokemon"
        height="150px"
      />

      <h4>Height: {pokemon.height} m</h4>
      <h4>Weight: {pokemon.weight} kg</h4>

      <h4>Type</h4>
      {pokemon.types.map((type, i) => {
        return <p key={i}>{type.type.name}</p>;
      })}
    </div>
  );
}
export default PokemonDetails;
