type IExperienceData =
  | {
      type: "quote";
      quote: string;
    }
  | {
      type: "list";
      list: string[];
    };

export interface IExperience {
  logoLight: string;
  logoDark?: string;
  title: string;
  timeline: string;
  company: string;
  data: IExperienceData;
}

export interface IContactInfo {
  avatar: string;
  status: string;
  social: {
    githubURL: string;
    linkedinURL: string;
  };
}
