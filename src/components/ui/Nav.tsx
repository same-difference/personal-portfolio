import { motion, useAnimate, useReducedMotion } from "framer-motion";

interface Props {
    classyName: string;
}

export default function Nav({ classyName }: Props) {
    const [gardenScope, gardenAnimate] = useAnimate();
    const [projectsScope, projectsAnimate] = useAnimate();
    const shouldReducedMotion = useReducedMotion();

    const handleHoverStart = (animateFn: typeof gardenAnimate | typeof projectsAnimate, scopeRef: typeof gardenScope | typeof projectsScope) => {
        if (shouldReducedMotion) return;
        animateFn(scopeRef.current, { 
          y: [0, -2, 4, -2, 0] 
        }, {
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity
        });
      };
    
      const handleHoverEnd = (animateFn: typeof gardenAnimate | typeof projectsAnimate, scopeRef: typeof gardenScope | typeof projectsScope) => {
        if (shouldReducedMotion) return;
        animateFn(scopeRef.current, { y: 0 }, { duration: 0.3 });
      };

    const boop = { scale: 1.1, boxShadow: '0 0 20px 1px #b3abe2', backgroundColor: 'rgba(179, 171, 226, 0.1)' };
    const beegBoop = { scale: 0.8, boxShadow: '0 0 20px 1px #b3abe2', backgroundColor: 'rgba(179, 171, 226, 0.1)' };

    return(
      <div className="flex flex-row gap-4 md:gap-5">
        <motion.a ref={gardenScope} href="https://garden.dnmurillo.com" onHoverStart={() => handleHoverStart(gardenAnimate, gardenScope)} onHoverEnd={() => handleHoverEnd(gardenAnimate, gardenScope)} whileHover={boop} whileFocus={boop} whileTap={beegBoop} className={classyName}>
            garden
        </motion.a>
        <motion.a ref={projectsScope} href="projects" onHoverStart={() => handleHoverStart(projectsAnimate, projectsScope)} onHoverEnd={() => handleHoverEnd(projectsAnimate, projectsScope)} whileHover={boop} whileFocus={boop} whileTap={beegBoop} className={classyName}>
            projects
        </motion.a>
      </div>
    );
}