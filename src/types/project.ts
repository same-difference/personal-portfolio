export type ProjectLink = {
    label: string;
    url: string;
};

export type Project = {
    title: string;
    image: string;
    image_alt: string;
    feature_text?: string;
    description: string;
    links: ProjectLink[];
    tags: string[];
    featured: boolean;
    page: boolean;
    page_slug?: string;
    page_content?: string;
};

export type Projects = Record<string, Project>