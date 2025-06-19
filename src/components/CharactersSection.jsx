import { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetail } from '../api/pokeapi';
import CharacterCard from './CharacterCard';

const CharactersSection = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    // NOTE: FETCH POKEMON DATA
    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = await getPokemonList();
                const details = await Promise.all(
                    list.results.map((p) => getPokemonDetail(p.name))
                );
                setPokemons(details);
            } catch (err) {
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="text-center text-white">Loading Pokémons...</p>;

    return (
        <section id="characters">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <h2 className="mb-2 text-2xl md:text-4xl font-extrabold text-white">Meet the Characters</h2>
                    <p className="mb-24 md:mb-32 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Explore all Pokémon species from every region. Click on a Pokémon to view details like types, abilities, evolutions, and stats.
                    </p>
                </div>
                <div className="space-y-8 grid grid-cols-1 gap-x-0 gap-y-24 md:grid-cols-3 lg:grid-cols-4  md:gap-x-8 md:gap-y-24 lg:space-y-0">
                    {pokemons.map((pokemon) => (
                        <CharacterCard
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.sprites.other.home.front_default}
                            stats={{
                                hp: pokemon.stats[0].base_stat,
                                atk: pokemon.stats[1].base_stat,
                                def: pokemon.stats[2].base_stat,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CharactersSection;
