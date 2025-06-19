const HeroSection = () => (
    <section id="home">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h2 className="text-lg font-bold pt-10 pb-2 md:text-xl lg:text-2xl">#DISCOVER YOUR FAVORITE POKÉMON</h2>
                <h1 className="max-w-2xl mb-4 text-3xl font-extrabold md:text-5xl xl:text-6xl dark:text-white">
                    Find Them. Know Them. Love Them.
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Explore the complete Pokémon list, powered by real-time data from PokeAPI. From starters to legendaries, get to know each Pokémon’s type, abilities, evolution chain, and more — all in one clean interface. No need to download apps or dig through wikis — just scroll, search, and discover. Your favorite Pokémon is just a click away!
                </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="#" alt="Pokemon" />
            </div>
        </div>
    </section>
);

export default HeroSection;
