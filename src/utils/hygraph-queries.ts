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
      highlightProjects {
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
      technologies {
        name
      }
    }
  }
`;

export const GET_PROJECTS_SLUG = `
  query {
    projects(first: 50) {
      slug
    }
  }
`;
