interface IProjects {
  projects: [IProjectAttributes];
}

interface IProjectAttributes {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnail: {
    url: string;
  };
  githubLink: string;
  projectLink: string;
  projectType: string;
  technologies: [
    {
      name: string;
    }
  ];
}
