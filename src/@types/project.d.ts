interface IProjectPage {
  project: IProject;
}

interface IProjectsPage {
  projects: IProject[];
}

interface IProjectsSlug {
  projects: [
    {
      slug: string;
    }
  ];
}

interface IProject {
  slug: string;
  title: string;
  shortDescription: string;
  githubLink?: string;
  projectLink?: string;
  thumbnail: {
    url: string;
  };
  technologies: [
    {
      name: string;
    }
  ];
}
