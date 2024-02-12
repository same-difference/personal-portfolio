import Project from "../Project"

export default function Projects() {
    return(
        <section className="relative min-h-screen flex flex-col justify-center items-center" id="projects">
            <h1 className="projects w-fit text-4xl md:text-6xl tracking-wide self-center pt-8 mb-8 md:mb-10">Projects</h1>
            <div className="mb-20 columns-1 md:columns-2 lg:columns-3 w-2/3 xl:w-1/2 2xl:w-2/5">
                <Project name="HookedIn" link="https://devpost.com/software/hookedin-n537qp" pic="hookedin.jpg" tags="react javascript express.js git" wip={false}>
                    A react app that uses chatGPT to roast the user's LinkedIn profile.
                </Project>
                <Project name="Book Review Site" link="https://students.gaim.ucf.edu/~di118075/dig3134/assignment06/login.php" pic="book_review_site.png" tags="html css php mySQL" wip={false}>
                    A proof-of-concept site to practice mySQL databases.
                </Project>
                <Project name="Personal Portfolio" link="https://github.com/same-difference/personal-portfolio" pic="personal_portfolio.png" tags="react typescript framer" wip={false}>
                    Yours truly, this gorgeous site.
                </Project>
                <Project name="The Unwilling Chef" link="" pic="icons8-moon-and-stars-cute-color-96.png" tags="figma" wip={true}>
                    A meal-prep app designed solely off user feedback.
                </Project>
                <Project name="Tournament Manager" link="" pic="icons8-constellation-cute-color-96.png" tags="" wip={true}>
                    A react app to keep scores and stuff.
                </Project>
            </div>
            <footer className="absolute bottom-1">Icons by <a target="_blank"  href="https://icons8.com">Icons8</a></footer>
        </section>
    );
}