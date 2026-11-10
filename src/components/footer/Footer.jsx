import {Heart} from "lucide-react";
import {Search} from "lucide-react";
import {UserRound} from "lucide-react";
import {PhoneCall} from "lucide-react";
import { useState } from "react";

function Footer(){
    const [lang, setLang] = useState("EN");

  const changeLang = () => {
    setLang((prev) => (prev === "EN" ? "AM" : "EN"));
  };
    return(
        <footer className="mr-20 ml-20">
            <div className="flex flex-nowrap justify-between items-center mx-auto px-5 py-5 text-lg bg-[#D3C6B1] text-black">
                <div className="flex flex-direction-column gap-10">
                    <h1 className="text-2xl font-['Baloo',sans-serif]">Avenza</h1>
                    <p>© 2024-2026. All rights reserved</p>
                </div>
                <div className="flex ml-130 gap-3">
                    <a href="#" className="text-black hover:underline">Shop</a>
                    <a href="#" className="text-black hover:underline">About</a>
                    <a href="#" className="text-black hover:underline">Contact us</a>
                   
                </div>
                <div className="flex items-center gap-4 shrink-0 whitespace-nowrap">
                    <Heart />
                    <PhoneCall />
                    <Search/>
                    <UserRound />
                    <button
                        onClick={changeLang}
                        className="rounded-2xl border border-black px-4 py-2
                        text-sm font-semibold text-black
                        transition duration-200 hover:bg-[#4C2304]
                      hover:text-white"
                    >
                        {lang}
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer