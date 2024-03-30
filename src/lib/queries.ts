export const GET_HOME = `
  query {
    home(where: { slug: "home" }) {
      name
      introduction {
        raw
      }
      avatar {
        url
      }
      introTechnologies {
        name
      }
      socialLinks {
        url
        icon
      }
      skills(first: 20) {
        name
        icon
      }
      highlightProjects(first: 5) {
        slug
        title
        shortDescription
        githubLink
        projectLink
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    experiences {
      companyName
      role
      description {
        text
      }
      startDate
      endDate
    }
  }
`;

export const GET_PROJECTS = `
  query {
    projects {
      slug
      title
      shortDescription
      thumbnail {
        url
      }
      githubLink
      projectLink
      projectType
    }
  }
`;

export const GET_SOCIALS = `
  query {
    socialLinks {
      name
      icon
      url
    }
  }
`;
