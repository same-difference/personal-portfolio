import type { Projects } from "../types";

export const projects: Projects = {
    adventour: {
        title: "AdvenTour",
        image: "adventour_crop.png",
        image_alt: "A pastel purple blue sky peeks between the skyline of an amusement park. There's a ferris wheel, a roller coaster, and circus tent. In the foreground: 'AdvenTour', sleek and sophisticated.",
        description: "A theme park day planning app with a custom companion smartwatch.",
        links: [
            { label: "YouTube", url: "https://www.youtube.com/watch?v=U2pXYz1bzd8" },
        ],
        tags: ["react-native", "supabase", "arduino", "c++"],
        featured: true,
        page: false,
    },

    guitar: {
        title: "GuitAR",
        image: "guitar_crop.png",
        image_alt: "A field of white, a faint grid heading into the horizon. Overlaid is the text 'GuitAR' in black and gold, the A in GuitAR replaced with the head of an electric guitar.",
        feature_text: "Won 2nd Overall @ KnightHacks 2024",
        description: "An AR guitar-teaching app made for the Meta Quest 3.",
        links: [
            { label: "Devpost", url: "https://devpost.com/software/guitar-o3gw19" },
        ],
        tags: ["unity", "grokit-core", "meta-xr-sdk", "c#"],
        featured: true,
        page: false,
    },

    unwillingChef: {
        title: "The Unwilling Chef",
        image: "unwilling_chef_crop.png",
        image_alt: "A pixel art rendition of a white tailed doe wearing one of those rainbow pinwheel hats you'd expect to find on a plucky but chubby german kid with a lollipop.",
        description: "A meal-prep app designed with user-centered design.",
        links: [
            { label: "Figma", url: "https://www.figma.com/design/tfPhmHlqGncP7OJHNhan78/Prototype?node-id=310-1619" },
        ],
        tags: ["figma", "ui/ux"],
        featured: true,
        page: false,
    },

    meddy: {
        title: "Meddy",
        image: "meddy_crop.png",
        image_alt: "meddy_crop.png",
        description: "Meddy provides a centralized database for patient information for patients and healthcare providers alike.",
        links: [
            { label: "Devpost", url: "https://devpost.com/software/meddy" },
        ],
        tags: ["react", "tailwind", "next.js"],
        featured: false,
        page: false,
    },

    theLab: {
        title: "The Lab",
        image: "the_lab_crop.png",
        image_alt: "the_lab_crop.png",
        description: "A choose-your-own-adventure game built to help the player better understand spoon theory.",
        links: [
            { label: "Devpost", url: "https://devpost.com/software/the-lab-hfynjw" },
        ],
        tags: ["react", "redux", "tailwind", "ink.js"],
        featured: false,
        page: false,
    },

    hookedIn: {
        title: "HookedIn",
        image: "hookedin_crop.png",
        image_alt: "hookedin_crop.png",
        description: "A react app that uses chatGPT to roast the user's LinkedIn profile.",
        links: [
            { label: "Devpost", url: "https://devpost.com/software/hookedin-n537qp" },
        ],
        tags: ["react", "javascript", "express.js", "git"],
        featured: false,
        page: false,
    },

    bookReviewSite: {
        title: "Book Review Site",
        image: "book_review_site_crop.png",
        image_alt: "book_review_site_crop.png",
        description: "A proof-of-concept site to practice mySQL databases.",
        links: [
            { label: "Live Project", url: "https://students.gaim.ucf.edu/~di118075/dig3134/assignment06/login.php" },
        ],
        tags: ["html", "css", "php", "mySQL"],
        featured: false,
        page: false,
    },
    
    personalPortfolio: {
        title: "Personal Portfolio",
        image: "personal_portfolio_crop.png",
        image_alt: "personal_portfolio_crop.png",
        description: "Yours truly, this gorgeous site.",
        links: [
            { label: "GitHub", url: "https://github.com/same-difference/personal-portfolio" },
        ],
        tags: ["react", "typescript", "framer-motion"],
        featured: false,
        page: false,
    },
}