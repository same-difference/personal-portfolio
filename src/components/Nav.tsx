import { motion } from "framer-motion";

interface Props {
    classyName: string;
}

export default function Nav({ classyName }: Props) {
    const boop = { scale: 1.1, letterSpacing: '0.1em' };
    
    return(
        <nav className={classyName}>
            <motion.a whileHover={boop} whileFocus={boop} whileTap={boop} href="#projects">---projects---</motion.a>
        </nav>
        
    );
}