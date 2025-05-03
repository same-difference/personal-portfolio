import Project from "../ui/Project";
import { projects } from "../../data/projects";

export default function Projects() {
    const allProjects = Object.values(projects);
    const featuredProjects = allProjects.filter(project => project.featured);
    const regularProjects = allProjects.filter(project => !project.featured);
    
    return(
        <section className="relative min-h-screen flex flex-col justify-center items-center" id="projects">
            <h1 className="projects w-fit text-4xl md:text-6xl tracking-wide self-center pt-8 mb-8 md:mb-10">Projects</h1>
            {/*cropped images are 588x410 pixels. mainly because i didnt feel like resizing the perfection that is the unwilling chef*/}
            <section className="mb-6 columns-1 md:columns-2 lg:columns-3 w-2/3 xl:w-1/2 2xl:w-2/5">
                {featuredProjects.map(project => (
                    <Project key={project.slug} project={project} version="featured" />
                ))}
            </section>
            <section className="mb-20 columns-1 md:columns-2 lg:columns-3 w-2/3 xl:w-1/2 2xl:w-2/5">
                {regularProjects.map(project => (
                    <Project key={project.slug} project={project} version="regular" />
                ))}
            </section>
            <footer className="absolute bottom-1 text-center">Made with &lt;3 by Dianneth Murillo - Icons by <a target="_blank"  href="https://icons8.com">Icons8</a></footer>
        </section>
    );
}