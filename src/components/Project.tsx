import { motion } from "framer-motion";

interface Props {
    children: string;
    name: string;
    link: string;
    wip: boolean;
}

export default function Project({ children, name, link, wip }: Props) {
    const boop = { scale: 1.07, color: "#b04c5b" };
    const beegBoop = { scale: 0.85 };
    
    return(
        <div className="project p-3 rounded-sm">
            <a href={link} target="_blank"><motion.h2 whileHover={boop} whileFocus={boop} whileTap={beegBoop} className="project tracking-wide font-bold text-center text-lg md:text-xl pb-2">{name}</motion.h2></a>
            <p className="px-2 text-justify">
                {children}
            </p>
            { wip ? <div className="wip w-full m-0">W I P</div> : ""}
        </div>
    );
}