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
    const boop = { scale: 1.03, boxShadow: '0 0 20px 1px #bc626e' };
    const beegBoop = { scale: 0.94, boxShadow: '0 0 20px 1px #bc626e' };
    
    return(
        <motion.a href={link} target="_blank" whileHover={boop} whileFocus={boop} whileTap={beegBoop} className="project block relative h-fit break-inside-avoid-column p-3 mb-6 md:mb-8 rounded-2xl shadow-[#bc626e] shadow-sm">
            <img className="mx-auto rounded-xl" src={pic} alt={pic} />
            <h2 className="project tracking-wide font-bold text-center text-lg md:text-xl py-2">{name}</h2>
            { wip ? <div className="wip -mx-3 mb-3 text-center py-0.5 tracking-wider bg-clip-border">{wip}</div> : ""}
            <p className="mx-auto px-2 pb-6 text-justify lg:text-center">
                {children}
            </p>
            { tags ? <Tags tags={tags}/> : ""}
        </motion.a>
    );
}