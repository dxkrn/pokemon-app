import { Link } from 'react-router-dom';

const CharacterCard = ({ id, name, image, stats }) => (
    <Link to={`/pokemon/${id}`}>
        <div className="group p-[2px] rounded-4xl bg-gradient-to-t from-violet-500 to-transparent">
            <div className="flex flex-col max-w-lg p-6 pt-16 mx-auto text-center text-white rounded-4xl shadow-xl items-center 
        bg-gradient-to-t from-transparent to-zinc-900 relative transition-all duration-300 hover:shadow-[0_10px_40px_rgba(139,92,246,0.5)] hover:-rotate-1">

                <div className="absolute -top-40 md:-top-24 transition-transform duration-300 group-hover:-translate-y-2">
                    <img src={image} alt={name} className="w-64 md:w-48" />
                </div>

                <h3 className="mb-4 text-2xl font-medium mt-12">{name}</h3>
                <div className="flex gap-4">
                    <div className="flex items-center"><img src="/assets/icon-hp.svg" className="w-5" /><p className="ml-1">{stats.hp}</p></div>
                    <div className="flex items-center"><img src="/assets/icon-attack.svg" className="w-5" /><p className="ml-1">{stats.atk}</p></div>
                    <div className="flex items-center"><img src="/assets/icon-defense.svg" className="w-5" /><p className="ml-1">{stats.def}</p></div>
                </div>
            </div>
        </div>
    </Link>
);

export default CharacterCard;
