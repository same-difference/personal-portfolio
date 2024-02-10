import { motion } from "framer-motion";

interface Props {
    classyName: string;
}

export default function Nav({ classyName }: Props) {

    return(
        <nav className={classyName}>
            <motion.a whileHover={{ scale: 1.1, letterSpacing: '0.1em' }} href="#projects">---projects---</motion.a>
        </nav>
        
    );
}