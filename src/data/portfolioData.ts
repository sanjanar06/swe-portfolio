export const personalInfo = {
  name: "Sanjana Reji",
  title: "Software Engineer",
  bio: "A software engineer with over two years of industry experience, currently pursuing my Master's in Computer Sciences at University of Wisconsin Madison. My interests lie at the intersection of system design, scalable architectures, and the stories behind how real-world tech systems evolve — I could talk about engineering case studies for hours. Outside of the code editor, you'll usually find me on a hiking trail or deep in a long-form tech article. I enjoy building thoughtful systems — and conversations.",
  resumeUrl: "https://docs.google.com/document/d/17FnJFyCtVXGh7cJKkjj5XWjesDbMeSkf35LwiHrNFB8/edit?usp=sharing",
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
    fullTitle: "Monolithic to Microservice Architecture Migration",
    subtitle: "A Systems Thinking Approach",
    tags: ["Java 17", "Spring Boot", "Kafka", "Redis", "Apigee Proxy", "Jenkins CI/CD", "Git", "SaaS", "Splunk"],
    fullDescription: `Migrating from a monolithic architecture to microservices wasn't just a code rewrite — it was a full-scale system redesign. The stakes were high: a critical, high-traffic platform, limited team capacity, and aggressive timelines meant I was involved at every stage of the transformation.`,
    sections: [
      {
        title: "Discovery and Decomposition",
        content: "We began by analyzing the usage of a legacy bulk API that was serving a wide range of downstream consumers. Through close collaboration with stakeholders, we identified the exact fields being used and the different use cases being served. This allowed us to break down the bulk API into multiple microservices — each focused on a specific responsibility — following the principle of separation of concerns. This not only made the architecture cleaner but also improved maintainability and performance."
      },
      {
        title: "Optimization for Scale and Event-Driven Design",
        content: "The system processes over two billion API calls annually, so performance and scalability were major concerns. To minimize the load on downstream systems, we introduced Redis caching, significantly reducing latency and cutting down unnecessary external calls. We also transitioned to an event-driven model using Kafka. This enabled asynchronous processing and parallel execution of downstream tasks like customer notifications, without blocking the main API response. These architectural decisions helped ensure the system could scale efficiently under heavy load."
      },
      {
        title: "Proxy Integration",
        content: "Authentication and authorization were abstracted through a centralized proxy layer. This layer enforced access controls, managed rate limiting, and ensured sensitive data was properly masked, aligning with PCI compliance requirements. We worked closely with the platform security team to ensure consistent identity propagation and secure service-to-service communication across the microservices."
      },
      {
        title: "Documentation",
        content: "One of the first things I quickly realized in a corporate environment is that documentation isn't just helpful — it's absolutely essential to get any work done. A lot of the work relies on insider knowledge that's specific to the enterprise or application, and without that context, even basic tasks can become blockers. Given that we were often working under tight deadlines, I made it a priority to document every new process, feature, or pipeline I was involved with. Whether it was onboarding a new component, managing a release, or setting up a proxy, I ensured that the steps were clearly written down in a centralized place for the team to refer to. This habit proved incredibly valuable, especially during KT sessions and onboarding. It also helped when internal consumer teams reached out — instead of repeatedly explaining the API scope or integration steps, I could point them to well-maintained documentation that answered most of their questions. It became a key part of how I contributed to the team's velocity and reduced dependencies during development and release cycles."
      }
    ],
    architectureImage: "/work/microservice-arch.png"
  },
  {
    company: "Wells Fargo",
    role: "Software Engineer Intern",
    period: "05/2022 - 07/2022",
    logo: "/work/wellsFargo.png",
    description: "Summer internship focused on backend development and system optimization.",
    fullTitle: "Building Real-Time Analytics Dashboard",
    subtitle: "Channeling my inner Richard Hendricks: 16 interns, one fintech tool, and agile.",
    tags: ["Java 17", "Spring Boot", "Kafka", "Spark", "MongoDB", "PyDash"],
    fullDescription: `During my internship at Wells Fargo, I worked on a real-time analytics dashboard that visualized large-scale financial data to provide immediate insights into customer transactions, account activity, and service usage. The system used a combination of Kafka, Spark, and MongoDB to stream and store data, while Pydash (our custom Python dashboard) brought everything to life visually. Think of it as the control room for all things data-driven at the bank.`,
    sections: [
      {
        title: "Contributions",
        content: "I was part of the team that built and extended Pydash, the Python-based analytics dashboard. My core responsibilities included: Designing and coding interactive visualizations for real-time data (e.g., transaction heatmaps, service usage graphs, geo-demographics). Pulling and aggregating data from MongoDB using live feeds powered by Kafka + Spark. Creating helper scripts to calculate derived metrics like dormant accounts, service popularity, and regional performance. Collaborating with the data engineering teams to ensure alignment across different data sources and schemas."
      },
      {
        title: "Takeaways",
        content: "As a huge fan of the Silicon Valley series, I jokingly introduced daily stand-ups to my sub-team at the start. To my surprise, these brief 10-minute check-ins turned out to be super effective, especially as our team grew larger. Before long, I found myself organizing Kanban boards, documenting everything (yes, everything), and making sure that no one was duplicating work or building the same graph twice. As the project scaled, I took on a more proactive role, working to align goals across three subteams: Kafka Team (real-time ingestion), Spark Team (streaming transformation), and Dashboard Team (bringing it all to life, where I was based). To keep everything running smoothly, I set up discord channels, organized weekly syncs, and used the kanban board and github project board to ensure everyone stayed aligned. The process of collaborating with different sub-teams helped maintain clarity and ensured no one was left behind, especially as things got more complex. During COVID, I had limited access to internal systems, which meant I had to build a standalone analytics platform from scratch. This turned out to be a blessing because it gave me autonomy and a deeper understanding of working in a remote-first environment."
      }
    ],
    architectureImage: "/work/analytics-arch.png"
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
  {
    title: "Customer Data Platform",
    description: "End-to-end data pipeline for customer analytics",
    tag: "Personal" as ProjectTag,
    icon: "📊",
    links: {
      github: "https://github.com/sanjanar06/Customer-Data-Platform-Pipeline",
    },
    details: {
      fullTitle: "Customer Data Platform Pipeline",
      fullDescription: "An end-to-end data pipeline for ingesting, processing, and analyzing customer data to power analytics and personalization use cases.",
      tags: ["Data Engineering", "Pipeline", "Analytics"],
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
