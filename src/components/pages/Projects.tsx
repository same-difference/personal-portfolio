import Project from "../Project"

export default function Projects() {
    const spoon_theory : React.ReactElement = <a className="underline hover:font-semibold focus:font-semibold active:hover:font-semibold text-[#b04c5b]" href="https://en.wikipedia.org/wiki/Spoon_theory" target="_blank">spoon theory</a>
    
    return(
        <section className="relative min-h-screen flex flex-col justify-center items-center" id="projects">
            <h1 className="projects w-fit text-4xl md:text-6xl tracking-wide self-center pt-8 mb-8 md:mb-10">Projects</h1>
            <div className="mb-20 columns-1 md:columns-2 lg:columns-3 w-2/3 xl:w-1/2 2xl:w-2/5">
                <Project name="The Lab" link="https://devpost.com/software/the-lab-hfynjw" pic="the_lab.png" tags="react redux tailwind ink.js" wip={false}>
                    A choose-your-own-adventure game built to help the player better understand {spoon_theory}.
                </Project>
                <Project name="HookedIn" link="https://devpost.com/software/hookedin-n537qp" pic="hookedin.jpg" tags="react javascript express.js git" wip={false}>
                    A react app that uses chatGPT to roast the user's LinkedIn profile.
                </Project>
                <Project name="Book Review Site" link="https://students.gaim.ucf.edu/~di118075/dig3134/assignment06/login.php" pic="book_review_site.png" tags="html css php mySQL" wip={false}>
                    A proof-of-concept site to practice mySQL databases.
                </Project>
                <Project name="Personal Portfolio" link="https://github.com/same-difference/personal-portfolio" pic="personal_portfolio.png" tags="react typescript framer" wip={false}>
                    Yours truly, this gorgeous site.
                </Project>
                <Project name="The Unwilling Chef" link="https://www.figma.com/design/tfPhmHlqGncP7OJHNhan78/Prototype?node-id=310-1619" pic="unwilling_chef.png" tags="figma ui/ux" wip={false}>
                    A meal-prep app designed with user-centered design.
                </Project>
            </div>
            <footer className="absolute bottom-1 text-center">Made with &lt;3 by Dianneth Murillo - Icons by <a target="_blank"  href="https://icons8.com">Icons8</a></footer>
        </section>
    );
}