import { motion } from "framer-motion";

interface Props {
    classyName: string;
}

export default function Nav({ classyName }: Props) {
    const boop = { scale: 1.1, boxShadow: '0 0 20px 1px #b3abe2', backgroundColor: 'rgba(179, 171, 226, 0.1)' };
    const beegBoop = { scale: 0.8, boxShadow: '0 0 20px 1px #b3abe2', backgroundColor: 'rgba(179, 171, 226, 0.1)' };

    return(
        <motion.a href="projects" whileHover={boop} whileFocus={boop} whileTap={beegBoop} className={classyName} id="projects-link">
            projects
        </motion.a>
        
    );
}