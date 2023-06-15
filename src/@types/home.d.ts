// import type { RichTextContent } from "@graphcms/rich-text-types";

interface IHomePage {
  home: IHomePageInfo;
  experiences: IExperience[];
}

interface IHomePageInfo {
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
  socialLinks: [
    {
      url: string;
      icon: string;
    }
  ];
  highlightProjects: IProject[];
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
