import { motion, useAnimate, useReducedMotion } from "framer-motion";

interface Props {
    classyName: string;
}

export default function Nav({ classyName }: Props) {
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

    const boop = { scale: 1.1, boxShadow: '0 0 20px 1px #b3abe2', backgroundColor: 'rgba(179, 171, 226, 0.1)' };
    const beegBoop = { scale: 0.8, boxShadow: '0 0 20px 1px #b3abe2', backgroundColor: 'rgba(179, 171, 226, 0.1)' };

    return(
        <motion.a ref={scope} href="projects" onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} whileHover={boop} whileFocus={boop} whileTap={beegBoop} className={classyName} id="projects-link">
            projects
        </motion.a>
        
    );
}