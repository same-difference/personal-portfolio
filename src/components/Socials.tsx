import { motion } from 'framer-motion';

interface Props {
    classyName: string;
}

export default function Socials({ classyName }: Props) {
    const boop1 = { 
        y: [0, -3, -6, -9, -6, -3, 2],
        rotate: [4, -18, 14, -16, 19, -18, -5],
        transition: {
            duration: 0.85,
            ease: "easeInOut",
            times: [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1]
        },
        scale: 1.05
    };
    const boop2 = { 
        y: [0, -3, -6, -9, -6, -3, -3],
        rotate: [4, -12, 14, -9, 13, -8, 5],
        transition: {
            duration: 0.81,
            ease: "easeInOut",
            times: [0, 0.15, 0.3, 0.52, 0.7, 0.85, 1]
        },
        scale: 1.05
    };
    const boop3 = { 
        y: [0, -3, -6, -9, -6, -3, -4],
        rotate: [4, -15, 11, -7, 9, -11, -3],
        transition: {
            duration: 0.86,
            ease: "easeInOut",
            times: [0, 0.19, 0.35, 0.53, 0.65, 0.8, 1]
        },
        scale: 1.05
    };
    const boop4 = { 
        y: [0, -3, -6, -9, -6, -3, 1],
        rotate: [4, -9, 11, -12, 7, -8, 6],
        transition: {
            duration: 0.83,
            ease: "easeInOut",
            times: [0, 0.21, 0.37, 0.49, 0.68, 0.79, 1]
        },
        scale: 1.05
    };
    const beegBoop = { scale: 0.85 };
    const email="mailto:dnmurillo@gmail.com";

    return(
        <div className={"flex flex-nowrap flex-row gap-6 md:gap-9 " + classyName}>
            <motion.a whileHover={boop1} whileFocus={boop1} whileTap={beegBoop} href="https://github.com/same-difference" target="_blank"><img src="icons8-github-64.png" alt="Github Button"/></motion.a>
            <motion.a whileHover={boop2} whileFocus={boop2} whileTap={beegBoop} href="https://www.linkedin.com/in/dianneth-murillo/" target="_blank"><img src="icons8-linkedin-64.png" alt="LinkedIn Button"/></motion.a>
            <motion.a whileHover={boop3} whileFocus={boop3} whileTap={beegBoop} href={email} target="_blank"><img src="icons8-email-64.png" alt="Send Email Button"/></motion.a>
            <motion.a whileHover={boop4} whileFocus={boop4} whileTap={beegBoop} href="murillo_dianneth_resume.pdf" target="_blank"><img src="icons8-resume-64.png" alt="View Resume Button"/></motion.a>
        </div>
    );
}