import CoffeeHero from "/images/CoffeeHero.jpg";
import Header from "../header/Header";


function Hero(){
    return (
       <section className="relative min-h-screen">
        
            <img
                src={CoffeeHero}
                alt="Coffee Hero"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-black/30 z-0"></div>

            <div className="relative z-50">
                <Header/>
            </div>
            <div className="relative z-10 ml-2 pt-4">
                <h1 className="relative z-10 text-white text-5xl font-bold text-left ml-20 pt-40 font-['Baloo',sans-serif]">
                Savor the Perfect
            </h1>
            <h1 className="relative z-10 text-white text-5xl font-bold text-left ml-20 pt-2.5 font-['Baloo',sans-serif]">Coffee!</h1>
            <h2 className="relative z-10 text-white text-2xl text-left ml-20 pt-2.5 font-['Inria_Serif',serif]">Discover the art of coffee made</h2>
             <h2 className="relative z-10 text-white text-2xl text-left ml-20 pt-2 font-['Inria_Serif',serif]">with care and love.</h2>
             <button className="mt-6 ml-22 text-black bg-[#D3C6B1] px-8 py-3 rounded-3xl cursor-pointer hover:scale-110 active:scale-85 transition-all duration-200">Shop now</button>
            </div>
            
        </section>
    );
}

export default Hero