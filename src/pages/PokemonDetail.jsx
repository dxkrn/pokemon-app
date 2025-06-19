import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPokemonDetail } from '../api/pokeapi';

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await getPokemonDetail(id);
                setPokemon(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemon();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!pokemon) return <p>Pokémon not found</p>;

    return (
        <div className="max-w-screen-md mx-auto py-10 text-white">
            <h1 className="text-4xl font-bold mb-4">{pokemon.name.toUpperCase()}</h1>
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} className="w-64" />
            <div className="mt-4">
                <p><strong>Species:</strong> {pokemon.species.name}</p>
                <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
                <p><strong>Height:</strong> {pokemon.height}</p>
                <p><strong>Base Stats:</strong></p>
                <ul>
                    {pokemon.stats.map((s, i) => (
                        <li key={i}>{s.stat.name}: {s.base_stat}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PokemonDetail;
