export const personalInfo = {
  name: "Sanjana Reji",
  title: "Software Engineer",
  bio: "A software engineer with over two years of industry experience, currently pursuing my Master's in Computer Sciences at University of Wisconsin Madison. My interests lie at the intersection of system design, scalable architectures, and the stories behind how real-world tech systems evolve — I could talk about engineering case studies for hours. Outside of the code editor, you'll usually find me on a hiking trail or deep in a long-form tech article. I enjoy building thoughtful systems — and conversations.",
  resumeUrl: "https://drive.google.com/file/d/1zi6NwEUZOOPaUNQDVK40bfx1zYxEg4qp/view?",
  location: "Madison, WI",
  email: "sanjanareji06@gmail.com",
};

export const workExperience = [
  {
    company: "Wells Fargo",
    role: "Software Engineer",
    period: "07/2023 - 05/2025",
    logo: "/work/wellsFargo.png",
    description: "Built and maintained scalable systems for enterprise financial applications.",
  },
  {
    company: "Wells Fargo",
    role: "Software Engineer Intern",
    period: "05/2022 - 07/2022",
    logo: "/work/wellsFargo.png",
    description: "Summer internship focused on backend development and system optimization.",
  },
];

export type ProjectTag = "Hackathon" | "Academic" | "In Progress" | "Personal";

export const projects = [
  {
    title: "DeepFake Detection",
    description: "Phoneme-viseme mismatch pipeline to detect fake videos",
    tag: "Academic" as ProjectTag,
    icon: "🎭",
    links: {
      github: "https://github.com/rameeznaufal/deepfake-detection",
      medium: "https://medium.com/@sanjanareji06",
      kaggle: "https://www.kaggle.com/datasets/reubensuju/celeb-df-v2/data",
      report: "https://drive.google.com/file/d/1gtegDZRVy76hzHjjUSTo2kLeXs-rQXIp/view?",
    },
    details: {
      fullTitle: "DeepFake Detection Based on Phoneme-Viseme Mismatch",
      fullDescription: "Designed and implemented a novel-pipeline to discern if a given video of a subject talking is real or fake by calculating the percentage of phoneme-viseme mismatch.",
      tags: ["Machine Learning", "Computer Vision", "Python"],
    },
  },
];

export const blogPosts = [
  {
    title: "Guide to SpringBoot OpenSource Project in CodeBaseShow: PART 1",
    date: "Mar 09, 2024",
    url: "https://medium.com/@sanjanareji06",
  },
  {
    title: "Part I: Playo Clone with SpringBoot & MySQL",
    date: "Jan 18, 2024",
    url: "https://medium.com/@sanjanareji06",
  },
  {
    title: "Who else other than Rose survived?",
    date: "Jun 21, 2023",
    url: "https://medium.com/@sanjanareji06",
  },
  {
    title: "How to reload trained models on Kaggle",
    date: "Jun 15, 2023",
    url: "https://medium.com/@sanjanareji06",
  },
  {
    title: "Data With Danny: Case Study 2",
    date: "Jun 15, 2023",
    url: "https://medium.com/@sanjanareji06",
  },
];

export const socials = {
  linkedin: {
    url: "https://www.linkedin.com/in/sanjana-kallingal/",
    description: "A software engineer without LinkedIn? Impossible. Drop a message on the chat!",
  },
  github: {
    url: "https://github.com/sanjanar06",
    description: "Don't check out the green boxes—read through my repositories instead.",
  },
  leetcode: {
    url: "https://leetcode.com/u/sanjana_r06/",
    description: "I \"definitely\" don't do LeetCode just for the DSA rounds. Haha.",
  },
  medium: {
    url: "https://medium.com/@sanjanareji06",
    description: "Where I write about tech, engineering case studies, and random thoughts.",
  },
};
