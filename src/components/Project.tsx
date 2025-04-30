import Tags from "./Tags";
import { motion, useAnimate, useReducedMotion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    name: string;
    link: string;
    pic: string;
    tags: string;
    wip: string;
}

export default function Project({ children, name, link, pic, tags, wip }: Props) {
    const [scope, animate] = useAnimate();
    const shouldReducedMotion = useReducedMotion();

    const handleHoverStart = () => {
        if (shouldReducedMotion) return;
        animate(scope.current, { 
          y: [0, -2, 4, -2, 0] 
        }, {
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity
        });
      };
    
      const handleHoverEnd = () => {
        animate(scope.current, { y: 0 }, { duration: 0.3 });
      };
    const boop = { scale: 1.03, boxShadow: '0 0 20px 1px rgba(254, 236, 238, 0.3)' };
    const beegBoop = { scale: 0.94, boxShadow: '0 0 20px 1px rgb(254, 236, 238, 0.3)' };
    
    return(
        <motion.a href={link} target="_blank" ref={scope} onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} whileHover={boop} whileFocus={boop} whileTap={beegBoop} className="project block relative h-fit break-inside-avoid-column p-3 mb-6 md:mb-8 rounded-2xl shadow-[rgba(254, 236, 238, 0.3)] shadow-md">
            <img className="w-full h-full object-cover mx-auto rounded-xl" src={pic} alt={pic} draggable="false" />
            <h2 className="project tracking-wide font-bold text-center text-2xl md:text-2xl py-2">{name}</h2>
            { wip ? <div className="wip -mx-3 mb-3 text-center py-0.5 px-1 tracking-wider bg-clip-border">{wip}</div> : ""}
            <p className="mx-auto px-2 pb-6 text-justify lg:text-center">
                {children}
            </p>
            { tags ? <Tags tags={tags}/> : ""}
        </motion.a>
    );
}