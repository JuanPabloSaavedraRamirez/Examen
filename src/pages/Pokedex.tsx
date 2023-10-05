import React, { useEffect, useState } from 'react';
import "../style/Pokedex.css"

const PokemonApp: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(currentPage - 1) * 10}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handlePokemonClick = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSelectedPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return <>
    <div className="pokedex">
      <h1>Pokémon List</h1>
      <button className='AyS' onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
      <button className='AyS' onClick={handleNextPage}>Next</button>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="pokemon-list-item">
            <button onClick={() => handlePokemonClick(pokemon.url)} className="pokemon-button">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(currentPage - 1) * 10 + index + 1}.png`} alt={pokemon.name} />
            </button>
          </li>
        ))}
      </ul>

      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
          <h3>Abilities</h3>
          <ul>
            {selectedPokemon.abilities.map((ability: any, index: number) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <h3>Type</h3>
          <ol>
            {selectedPokemon.types.map((type: any, index: number) => (
            <li key={index}>{type.type.name}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
    <br /><br /><br />
    <div className="Final">
        <h3 className="linkedlnT">Linkdln: (personal)</h3><a className="Linkdln" href="https://www.linkedin.com/in/juan-pablo-saavedra-ram%C3%ADrez-77ab15288"><img className="LinI" src="in.png" alt="" /></a>
        <h3 className="GithubiT">Github: (personal)</h3><a  className="Githubi" href="https://github.com/JuanPabloSaavedraRamirez"><img className="GitI" src="GitHub-Mark.png" alt="" /></a>
    </div>
  </>
};

export default PokemonApp;
