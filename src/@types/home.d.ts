interface IHome {
  home: IHomeAttributes;
  experiences: IExperience[];
}

interface IHomeAttributes {
  name: string;
  introduction: {
    raw: any;
  };
  avatar: {
    url: string;
  };
  introTechnologies: [
    {
      name: string;
    }
  ];
  skills: ISkill[];
  socialLinks: [ISocialAttributes];
  highlightProjects: [IProject];
}

interface ISkill {
  name: string;
  icon: string;
}

interface IExperience {
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  description: {
    text: string;
  };
}
