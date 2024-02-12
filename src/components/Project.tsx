import Tags from "./Tags";
import { motion } from "framer-motion";

interface Props {
    children: string;
    name: string;
    link: string;
    pic: string;
    tags: string;
    wip: boolean;
}

export default function Project({ children, name, link, pic, tags, wip }: Props) {
    const boop = { scale: 1.07, color: "#b04c5b" };
    const beegBoop = { scale: 0.85, color: "#b04c5b" };
    
    return(
        <div className="project pt-3 px-3 rounded-sm shadow-[#9d545e] shadow-lg">
            <a href={link} target="_blank"><img className="pb-2 block mx-auto" src={pic} /></a>
            <a href={link} target="_blank"><motion.h2 whileHover={boop} whileFocus={boop} whileTap={beegBoop} className="project tracking-wide font-bold text-center text-lg md:text-xl pb-2">{name}</motion.h2></a>
            <p className="mx-auto px-2 pb-6 text-justify lg:text-center">
                {children}
            </p>
            { tags ? <Tags tags={tags}/> : ""}
            { wip ? <div className="wip -mx-3 text-center py-0.5 tracking-wider">wip</div> : ""}
        </div>
    );
}