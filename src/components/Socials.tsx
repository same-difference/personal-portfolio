import { motion } from 'framer-motion';

interface Props {
    classyName: string;
}

export default function Socials({ classyName }: Props) {
    const boop = { scale: 1.15 };
    const beegBoop = { scale: 0.75 };
    const email="mailto:dnmurillo@gmail.com";

    return(
        <div className={"flex flex-nowrap flex-row gap-6 md:gap-9 " + classyName}>
            <motion.a whileHover={boop} whileFocus={boop} whileTap={beegBoop} href="https://github.com/same-difference" target="_blank"><img src="icons8-github-64.png" alt="Github Button"/></motion.a>
            <motion.a whileHover={boop} whileFocus={boop} whileTap={beegBoop} href="https://www.linkedin.com/in/dianneth-murillo/" target="_blank"><img src="icons8-linkedin-64.png" alt="LinkedIn Button"/></motion.a>
            <motion.a whileHover={boop} whileFocus={boop} whileTap={beegBoop} href={email} target="_blank"><img src="icons8-email-64.png" alt="Send Email Button"/></motion.a>
            <motion.a whileHover={boop} whileFocus={boop} whileTap={beegBoop} href="murillo_dianneth_resume.pdf" target="_blank"><img src="icons8-resume-64.png" alt="View Resume Button"/></motion.a>
        </div>
    );
}