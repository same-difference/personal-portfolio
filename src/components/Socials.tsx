interface Props {
    classyName: string;
}


export default function Socials({ classyName }: Props) {

    const email="mailto:dnmurillo@gmail.com";

    return(
        <div className={"flex flex-nowrap flex-row gap-9 " + classyName}>
            <a href="https://github.com/same-difference" target="_blank"><img src="icons8-github-64.png" alt="Github Button"/></a>
            <a href="https://www.linkedin.com/in/dianneth-murillo/" target="_blank"><img src="icons8-linkedin-64.png" alt="LinkedIn Button"/></a>
            <a href={email} target="_blank"><img src="icons8-email-64.png" alt="Send Email Button"/></a>
            <a href="murillo_dianneth_resume.pdf" target="_blank"><img src="icons8-resume-64.png" alt="View Resume Button"/></a>
        </div>
    );
}