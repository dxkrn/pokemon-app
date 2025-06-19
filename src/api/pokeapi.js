const BASE_URL = 'https://pokeapi.co/api/v2';

// NOTE: GET POKEMON LIST
export const getPokemonList = async (limit = 12, offset = 0) => {
    const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error('Gagal mengambil daftar Pokémon');
    return await res.json();
};

// NOTE: GET POKEMON DETAIL
export const getPokemonDetail = async (name) => {
    const res = await fetch(`${BASE_URL}/pokemon/${name}`);
    if (!res.ok) throw new Error('Gagal mengambil detail Pokémon');
    return await res.json();
};
