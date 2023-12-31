import HoverName from "./HoverName";
import IAmA from "./IAmA";
import Socials from "./Socials";

export default function IntroCard() {
    return(
        <section className="w-1/2 my-16 mx-auto lg:grid lg:grid-cols-3 lg:gap-y-44">
            <img src="https://placehold.co/400" alt="Cool Splash Art Here" className="lg:col-start-3 lg:row-start-1"/>
            <div className="flex flex-col w-max lg:col-start-1 lg:row-start-1 lg:col-span-2">
                <h3 className="text-4xl tracking-wide self-start place-self-start">Hi, my name's</h3>
                <div className="flex flex-row w-max">
                    <HoverName wrapper="h1" idCard="splash" classyName="w-fit text-8xl tracking-wide self-center place-self-start"/>
                    <h4 className="text-2xl tracking-widest self-end place-self-start">&ensp;she/her</h4>
                </div>
                <IAmA wrapper="h2" classyName="text-5xl w-max"/>
                <Socials classyName="mt-6" />
            </div>
            
        </section>
    );
}