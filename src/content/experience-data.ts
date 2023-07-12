import { IExperience } from "./models";

export const experienceList: IExperience[] = [
  {
    logoLight: "/assets/airbus logo light.svg",
    logoDark: "/assets/airbus logo dark.svg",
    title: "Engineer",
    timeline: "Oct'20 - April'23",
    company: "Airbus",
    data: {
      type: "list",
      list: [
        "Developed feature-rich tool interfaces with advanced plotting capabilities",
        "Served as the UI maintainer of tools in collaboration with Engineering teams",
        "Promoted and integrated the Airbus Design System within our development process",
      ],
    },
    skills: ["React", "Sketch", "Figma", "Openshift"],
  },
  {
    logoLight: "/assets/airbus logo light.svg",
    logoDark: "/assets/airbus logo dark.svg",
    title: "Associate Engineer",
    timeline: "July'18 - Sept'20",
    company: "Airbus",
    data: {
      type: "list",
      list: [
        "Assisted in enhancing a web app for flight test planning and certification documentation",
        "Instrumental in the successful migration of an existing tool to Angular 2.0 framework",
      ],
    },
    skills: ["Angular", "AdobeXD", "Java"],
  },
  {
    logoLight: "/assets/iitm logo.svg",
    title: "Engineering Design",
    timeline: "2013 - 2018",
    company: "IIT-M",
    data: {
      type: "quote",
      quote:
        "At university, I discovered a passion for programming, particularly Python, which I explored through both academics and internships. This journey sparked my fascination with the dynamic union of creativity and code.",
    },
  },
];
