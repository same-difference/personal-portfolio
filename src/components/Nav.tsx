import { motion } from "framer-motion";

interface Props {
    classyName: string;
}

export default function Nav({ classyName }: Props) {
    const boop = { scale: 1.1, letterSpacing: '0.1em' };
    const beegBoop = { scale: 1.35, letterSpacing: '0.4em' };

    return(
        <nav className={classyName}>
            <motion.a whileHover={boop} whileFocus={boop} whileTap={beegBoop} href="#projects">---projects---</motion.a>
        </nav>
        
    );
}