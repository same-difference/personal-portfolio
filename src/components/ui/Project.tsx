import Tags from "./Tags";
import { motion, useAnimate, useReducedMotion } from "framer-motion";
import type { Project } from "../../types";

interface Props {
    project: Project;
    version: "featured" | "regular";
}

export default function Project({ project, version }: Props) {
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

    if (version == "featured") {
      // do cool stuff later, I'm just doing this to get rid of the ESLint warning
    }
    
    return(
        <motion.a href={project.links[0].url} target="_blank" ref={scope} onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} whileHover={boop} whileFocus={boop} whileTap={beegBoop} className="project block relative h-fit break-inside-avoid-column p-3 mb-6 md:mb-8 rounded-2xl shadow-[rgba(254, 236, 238, 0.3)] shadow-md">
            <img className="w-full h-full object-cover mx-auto rounded-xl" src={`/thumbnails/${project.image}`} alt={project.image_alt} draggable="false" />
            <h2 className="project tracking-wide font-bold text-center text-2xl md:text-2xl py-2">{project.title}</h2>
            { project.feature_text ? <div className="wip -mx-3 mb-3 text-center py-0.5 px-1 tracking-wider bg-clip-border">{project.feature_text}</div> : ""}
            <p className="mx-auto px-2 pb-6 text-justify lg:text-center">
                {project.description}
            </p>
            { project.tags ? <Tags tags={project.tags}/> : ""}
        </motion.a>
    );
}