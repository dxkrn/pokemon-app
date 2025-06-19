import { useEffect, useState } from "react";
import "animate.css";

const heroImages = [
    "/assets/hero-1.png",
    "/assets/hero-2.png",
    "/assets/hero-3.png",
];

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % heroImages.length);
                setAnimate(true);
            }, 100);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="w-full h-full">
            <div className="relative overflow-hidden">
                <img src="/assets/gradient.png" className="absolute -top-112 left-1/2 -translate-x-1/2 w-[150%] h-[150%] md:w-[200%] md:h-[200%] md:-top-200 md:-right-90 object-cover z-0" />
                <div className="relative z-10 grid max-w-screen-xl px-8 pt-20 pb-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7 animate__animated animate__fadeInUp">
                        <h2 className="text-lg font-bold pt-10 pb-2 md:text-xl lg:text-2xl">#DISCOVER YOUR FAVORITE POKÉMON</h2>
                        <h1 className="max-w-2xl mb-4 text-3xl font-extrabold md:text-5xl xl:text-6xl dark:text-white">
                            Find Them. Know Them. Love Them.
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Explore the complete Pokémon list, powered by real-time data from PokeAPI. From starters to legendaries, get to know each Pokémon’s type, abilities, evolution chain, and more — all in one clean interface. No need to download apps or dig through wikis — just scroll, search, and discover. Your favorite Pokémon is just a click away!
                        </p>

                        <a href="#"
                            target="_blank" rel="noopener noreferrer">
                            <div
                                className="flex flex-row bg-violet-500 px-6 py-4 rounded-xl gap-x-4 items-center justify-center w-full mb-4 shadow-[0_10px_40px_rgba(139,92,246,0.5)] hover:bg-violet-700 md:w-fit lg:w-fit">
                                <p className="text-base md:text-lg">Explore Now</p>
                            </div>
                        </a>
                    </div>
                    {/* HERO IMAGE */}
                    <div className="hidden md:w1/2 lg:mt-0 lg:col-span-5 lg:flex">
                        {animate && (
                            <img
                                src={heroImages[currentImage]}
                                alt="Pokemon"
                                key={currentImage}
                                className="animate__animated animate__flip"
                            />
                        )}
                    </div>
                </div>
            </div>

        </section>
    )
};

export default HeroSection;
