interface IProjects {
  project: IProjectAttributes;
  projects: [IProjectAttributes];
}

interface IProjectAttributes {
  slug: string;
  title: string;
  shortDescription: string;
  githubLink: string;
  projectLink: string;
  projectType: string;
  thumbnail: {
    url: string;
  };
  technologies: [
    {
      name: string;
    }
  ];
}
