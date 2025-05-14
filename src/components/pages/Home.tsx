import HoverName from "../ui/HoverName";
import IAmA from "../ui/IAmA";
import Socials from "../ui/Socials";
import Nav from "../ui/Nav";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
    
    const location = useLocation();

    useEffect(() => {
        if(location.pathname == "/projects") {
            document.getElementById("projects")!.scrollIntoView({behavior: "smooth"});
            document.body.style.backgroundImage = "linear-gradient(180deg, rgba(45,18,99,1) 0%, rgba(79,35,103,1) 50%, rgba(157,84,94,1) 100%)";
        }
        else {
            document.body.style.backgroundImage = "linear-gradient(180deg, rgba(45,18,99,1) 0%, rgba(79,35,103,1) 100%)";
        }
    }, [location]);

    return(
        <>
            <section className="h-screen flex flex-col justify-center items-center">
                <h3 className="text-4xl md:text-5xl tracking-wide pb-3">Hi, my name's</h3>
                <div className="flex flex-row w-max">
                    <HoverName classyName="w-fit text-6xl md:text-9xl tracking-wide self-center place-self-start"/>
                    <h4 className="text-xl md:text-4xl tracking-widest self-end place-self-start">&ensp;she/her</h4>
                </div>
                <IAmA wrapper="h2" classyName="pt-6 md:pt-10 text-3xl md:text-5xl w-max text-[#cdc7f8]"/>
                <Socials classyName="mt-14 md:mt-18 md:pt-6 shrink-1 w-2/3 place-content-center" />
                <Nav classyName="border border-[#b3abe2]/50 hover:border-[#b3abe2]/10 border-solid py-0.5 px-10 rounded-full tracking-wider mt-9 md:mt-7 text-2xl md:text-4xl text-[#D2CDF3]" />
            </section>
            <Outlet />
        </>
    );
}