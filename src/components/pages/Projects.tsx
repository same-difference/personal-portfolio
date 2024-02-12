import Project from "../Project"

export default function Projects() {
    return(
        <section className="relative h-screen flex flex-col justify-center items-center" id="projects">
            <h1 className="projects w-fit text-4xl md:text-6xl tracking-wide self-center place-self-start mb-8 md:mb-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-2/3 xl:w-1/2">
                <Project name="HookedIn" link="https://devpost.com/software/hookedin-n537qp" wip={false}>
                    A react app that uses chatGPT to roast the user's LinkedIn profile.
                </Project>
                <Project name="Book Review Site" link="https://students.gaim.ucf.edu/~di118075/dig3134/assignment06/login.php" wip={false}>
                    A proof-of-concept site to practice mySQL databases.
                </Project>
                <Project name="Personal Portfolio" link="https://github.com/same-difference/personal-portfolio" wip={false}>
                    Yours truly, this gorgeous site.
                </Project>
                {/*
                <Project name="The Unwilling Chef" link="" wip={true}>
                    A meal-prep app designed solely off user feedback.
                </Project>
                <Project name="Tournament Manager" link="" wip={true}>
                    A react app to keep scores and stuff.
                </Project>
                */}
            </div>
            <footer className="absolute bottom-1">Icons by <a target="_blank"  href="https://icons8.com">Icons8</a></footer>
        </section>
    );
}