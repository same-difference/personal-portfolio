import HoverName from "../HoverName";
import IAmA from "../IAmA";
import Socials from "../Socials";
import Nav from "../Nav";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function IntroCard() {
    
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
                    <HoverName wrapper="h1" classyName="w-fit text-6xl md:text-9xl tracking-wide self-center place-self-start"/>
                    <h4 className="text-xl md:text-4xl tracking-widest self-end place-self-start">&ensp;she/her</h4>
                </div>
                <IAmA wrapper="h2" classyName="pt-6 md:pt-10 text-3xl md:text-5xl w-max"/>
                <Socials classyName="mt-14 md:mt-18 md:pt-6 shrink-1 w-2/3 place-content-center" />
                <Link to="/projects"><Nav classyName="mt-7 md:mt-5 text-3xl md:text-4xl" /></Link>
            </section>
            <Outlet />
        </>
    );
}