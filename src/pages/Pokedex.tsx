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

  return (
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
        </div>
      )}
    </div>
  );
};

export default PokemonApp;
