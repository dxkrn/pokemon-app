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

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    }, [loading]);


    if (loading) return <div className='w-full h-screen mx-auto flex items-center justify-center'><p>Loading...</p></div>;
    if (!pokemon) return <div className='w-full h-screen mx-auto flex items-center justify-center'><p>Pokémon not found!</p></div>;

    // NOTE: Select Image
    const defaultImage = pokemon?.sprites?.other?.home?.front_default;
    const shinyImage = pokemon?.sprites?.other?.home?.front_shiny;
    const placeholder = "/assets/character-placeholder.png";

    const selectedImage = defaultImage || shinyImage || placeholder;

    return (
        <div className="relative w-full overflow-hidden">
            <img
                src="/assets/gradient.png"
                className="absolute -top-128 left-1/2 -translate-x-1/2 w-[200w] h-full opacity-80 object-cover z-0 md:-top-200"
            />

            <div className="relative z-10 flex flex-col items-center px-8 pt-8 pb-8 ">
                <div className="md:w1/2 lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={selectedImage} alt={pokemon.name} />
                </div>
                <h1 className="capitalize my-4 text-3xl font-extrabold md:my-8 md:text-5xl xl:text-6xl dark:text-white">
                    {pokemon.name}
                </h1>
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-violet-500 to-transparent w-full mx-auto">
                    <div className="bg-gradient-to-r from-zinc-900 to-transparent text-white rounded-xl p-4">
                        <div className="grid grid-cols-3 gap-4 font-semibold text-center mb-2 text-base md:text-xl">
                            <div>Species</div>
                            <div>Abilities</div>
                            <div>Height</div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center text-sm opacity-80 md:text-lg">
                            <div className="capitalize">{pokemon.species.name}</div>
                            <div className="capitalize">
                                {pokemon.abilities.map((a) => a.ability.name).join(', ')}
                            </div>
                            <div>{pokemon.height}</div>
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-4 mt-8">
                    {pokemon.stats.map((s, i) => (
                        <div key={i}>
                            <div className="flex justify-between mb-1 font-medium text-white">
                                <span className="capitalize text-base md:text-xl">{s.stat.name}</span>
                                <span className="text-sm opacity-80 md:text-lg">{s.base_stat}</span>
                            </div>
                            <div className="w-full bg-zinc-700 rounded-lg h-8 md:h-12">
                                <div
                                    className="bg-violet-500 h-8 rounded-lg md:h-12"
                                    style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    );
};

export default PokemonDetail;
