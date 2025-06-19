const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit = 12, offset = 0) => {
    const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error('Get Pokémon list failed.');
    return await res.json();
};

export const getPokemonDetail = async (name) => {
    const res = await fetch(`${BASE_URL}/pokemon/${name}`);
    if (!res.ok) throw new Error('Get Pokémon detail failed.');
    return await res.json();
};
