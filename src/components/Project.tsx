import Tags from "./Tags";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    name: string;
    link: string;
    pic: string;
    tags: string;
    wip: string;
}

export default function Project({ children, name, link, pic, tags, wip }: Props) {
    const boop = { scale: 1.15, color: "#b04c5b" };
    const beegBoop = { scale: 0.85, color: "#b04c5b" };
    const imgboop = { scale: 1.03 };
    const imgBeegBoop = { scale: 1.07 };
    
    return(
        <div className="project relative h-fit break-inside-avoid-column p-3 mb-6 md:mb-8 rounded-2xl shadow-[#9d545e] shadow-lg">
            <a href={link} target="_blank"><motion.img whileHover={imgboop} whileFocus={imgboop} whileTap={imgBeegBoop} className="mx-auto rounded-xl" src={pic} alt={pic} /></a>
            <a href={link} target="_blank"><motion.h2 whileHover={boop} whileFocus={boop} whileTap={beegBoop} className="project tracking-wide font-bold text-center text-lg md:text-xl py-2">{name}</motion.h2></a>
            { wip ? <div className="wip -mx-3 mb-3 text-center py-0.5 tracking-wider bg-clip-border">{wip}</div> : ""}
            <p className="mx-auto px-2 pb-6 text-justify lg:text-center">
                {children}
            </p>
            { tags ? <Tags tags={tags}/> : ""}
        </div>
    );
}