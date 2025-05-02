import Project from "../ui/Project"

export default function Projects() {
    const spoon_theory : React.ReactElement = <a className="underline hover:font-semibold focus:font-semibold active:hover:font-semibold text-[#b04c5b]" href="https://en.wikipedia.org/wiki/Spoon_theory" target="_blank">spoon theory</a>
    
    return(
        <section className="relative min-h-screen flex flex-col justify-center items-center" id="projects">
            <h1 className="projects w-fit text-4xl md:text-6xl tracking-wide self-center pt-8 mb-8 md:mb-10">Projects</h1>
            {/*cropped images are 588x410 pixels. mainly because i didnt feel like resizing the perfection that is the unwilling chef*/}
            <div className="mb-6 columns-1 md:columns-2 lg:columns-3 w-2/3 xl:w-1/2 2xl:w-2/5">
                <Project name="AdvenTour" link="https://www.youtube.com/watch?v=U2pXYz1bzd8" pic="/thumbnails/adventour_crop.png" tags="react-native supabase arduino c++" wip="">
                    A theme park day planning app with a custom companion smartwatch.
                </Project>
                <Project name="GuitAR" link="https://devpost.com/software/guitar-o3gw19" pic="/thumbnails/guitar_crop.png" tags="unity grokit-core meta-xr-sdk c#" wip="Won 2nd Overall @ KnightHacks 2024">
                    An AR guitar-teaching app made for the Meta Quest 3.
                </Project>
                <Project name="The Unwilling Chef" link="https://www.figma.com/design/tfPhmHlqGncP7OJHNhan78/Prototype?node-id=310-1619" pic="/thumbnails/unwilling_chef.png" tags="figma ui/ux" wip="">
                    A meal-prep app designed with user-centered design.
                </Project>
            </div>
            <div className="mb-20 columns-1 md:columns-2 lg:columns-3 w-2/3 xl:w-1/2 2xl:w-2/5">
                <Project name="Meddy" link="https://devpost.com/software/meddy" pic="/thumbnails/meddy_crop.png" tags="react tailwind next.js" wip="">
                    Meddy provides a centralized database for patient information for patients and healthcare providers alike.
                </Project>
                <Project name="The Lab" link="https://devpost.com/software/the-lab-hfynjw" pic="/thumbnails/the_lab_crop.png" tags="react redux tailwind ink.js" wip="">
                    A choose-your-own-adventure game built to help the player better understand {spoon_theory}.
                </Project>
                <Project name="HookedIn" link="https://devpost.com/software/hookedin-n537qp" pic="/thumbnails/hookedin_crop.png" tags="react javascript express.js git" wip="">
                    A react app that uses chatGPT to roast the user's LinkedIn profile.
                </Project>
                <Project name="Book Review Site" link="https://students.gaim.ucf.edu/~di118075/dig3134/assignment06/login.php" pic="/thumbnails/book_review_site_crop.png" tags="html css php mySQL" wip="">
                    A proof-of-concept site to practice mySQL databases.
                </Project>
                <Project name="Personal Portfolio" link="https://github.com/same-difference/personal-portfolio" pic="/thumbnails/personal_portfolio_crop.png" tags="react typescript framer-motion" wip="">
                    Yours truly, this gorgeous site.
                </Project>
            </div>
            <footer className="absolute bottom-1 text-center">Made with &lt;3 by Dianneth Murillo - Icons by <a target="_blank"  href="https://icons8.com">Icons8</a></footer>
        </section>
    );
}