import React from "react";

export type ProjectLink = {
    label: string;
    url: string;
};

export type Project = {
    slug: string;
    title: string;
    image: string;
    image_alt: string;
    feature_text?: string;
    description: string | React.ReactNode;
    links: ProjectLink[];
    tags: string[];
    featured: boolean;
    page: boolean;
    page_content?: string;
};

export type Projects = Record<string, Project>