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
  category: {
    name: string;
  };
  technologies: [
    {
      name: string;
    }
  ];
}
