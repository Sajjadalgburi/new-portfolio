import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Newspaper } from "lucide-react";

export const DATA = {
  name: "Sajjad Algburi",
  initials: "SA",
  url: "https://sajjadalgburi.dev",
  location: "Calgary, AB",
  locationLink: "https://www.google.com/maps/place/calgary",
  description:
    "Full Stack Engineer passionate about building impactful products and helping others. Experienced in modern web technologies and AI integrations.",
  summary:
    "After enrolling in a coding bootcamp in 2023, I connected with talented peers and built a range of exciting projects. My journey has been driven by curiosity, collaboration, and a desire to solve real-world problems with technology.",
  avatarUrl: "/me-2.png",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sajjadalgburi.dev@gmail.com",
    tel: "+1 (825) 365-6358",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sajjadalgburi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sajjadalgburi/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: Newspaper,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:sajjadalgburi.dev@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Codebender AI",
      href: "https://www.codebender.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4E0BAQE_VKOVODIP8g/company-logo_200_200/company-logo_200_200/0/1723912031225?e=1755734400&v=beta&t=MRhzxjsrY8_t2ZnuG402_EkEYYrZXBPIee9GQo3WXuY",
      start: "Jan 2025",
      end: "June 2025",
      description:
        "Developed and deployed AI automations using custom code and low-code tools (n8n), streamlining client workflows, reducing manual tasks by 40%, and lowering operational costs.",
    },
    {
      company: "Outreach AI",
      href: "https://www.outreachai.app/",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQE9CkTcrCsOPw/company-logo_100_100/B56ZYH._XrGoAQ-/0/1743890675484/outreachai_app_logo?e=1755734400&v=beta&t=reQP1jHfgc61mZfWamRRO5IRbFVbLw7vfiaEo-SBTKg",
      start: "Aug 2024",
      end: "Jan 2025",
      description:
        "Built the frontend + backend and integrated AI models for a platform that generates personalized outreach messages and cover letters, enhancing user engagement and efficiency.",
    },
    {
      company: "Upwork Contractor",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQFHVb6ZSCipCw/company-logo_200_200/company-logo_200_200/0/1727104517379/upwork_logo?e=1755734400&v=beta&t=6vh0B56UtknUUrqhDpCfJ9vg6hKgRru4iBFK7Qu5LaE",
      start: "Dec 2023",
      end: "Aug 2024",
      description:
        "Collaborated with diverse clients to design and develop high-performance, mobile-responsive web applications using React, Next.js, and TypeScript. Delivered custom backend (nodejs + express) solutions tailored to business needs, ensuring fast load times, seamless user experiences, and scalable architectures.",
    },
  ],
  education: [
    {
      school: "University of Toronto - Bootcamp",
      href: "https://www.utoronto.ca/",
      degree: "Certificate",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQHX-foiyEDxpw/company-logo_200_200/company-logo_200_200/0/1639421285702/university_of_toronto_logo?e=1755734400&v=beta&t=rWXrKTU6udfTe8hvVsqlJcV-3IpDRlcPoXRAwwB9WFE",
      start: "Nov 2023",
      end: "May 2024",
    },
  ],
  certifications: [
    {
      org: "Frontend Masters",
      credUrl:
        "https://static.frontendmasters.com/ud/c/3c1904eaa5/ZfBjFwyWWj/practical-python.pdf",
      name: "Practical Guide to Python",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQEjPhvpXpXOHw/company-logo_200_200/company-logo_200_200/0/1631336133392?e=1755734400&v=beta&t=yAA2B3t4o0YWghztGbfhjPImwDrncBgDGOHjqzRAIAU",
      issued: "April 2025",
    },
    {
      org: "Frontend Masters",
      credUrl:
        "https://static.frontendmasters.com/ud/c/3c1904eaa5/fpKAkoKlbq/testing.pdf",
      name: "Testing Fundamentals",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQEjPhvpXpXOHw/company-logo_200_200/company-logo_200_200/0/1631336133392?e=1755734400&v=beta&t=yAA2B3t4o0YWghztGbfhjPImwDrncBgDGOHjqzRAIAU",
      issued: "March 2025",
    },
    {
      org: "Apollo GraphQL",
      credUrl:
        "https://www.apollographql.com/tutorials/certifications/39d39aaa-8149-4c1f-9924-0317e7a26698",
      name: "Graph Developer - Associate",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4E0BAQEGZMLBEs1-xg/company-logo_200_200/company-logo_200_200/0/1696614349853/apollo_graphql_logo?e=1755734400&v=beta&t=mrSqcHuxN-I5SevvWly56-mjyeYTHg9LYhoEEt9IJCY",
      issued: "Feb 2025",
    },
  ],
  projects: [
    {
      title: "Interview Pal",
      href: "https://drive.google.com/file/d/1szn73VL_cuMHY3MirBCbhMf3JufhJhfg/view",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "A platform for practicing coding interviews with AI-generated questions and instant feedback. Users select topics and receive tailored interview experiences.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
        "Gemini",
        "Vapi",
      ],
      links: [
        {
          type: "Website",
          href: "https://drive.google.com/file/d/1szn73VL_cuMHY3MirBCbhMf3JufhJhfg/view",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi/interview_pal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/inter.png",
      video: "",
    },
    {
      title: "News Network",
      href: "https://drive.google.com/file/d/1WX62CmU2zTO7L5pFUM452zN7G2CRMkPe/view",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "Full-stack news app displaying global trending news, with AI-powered article bias analysis and summary generation.",
      technologies: [
        "React",
        "TypeScript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "GraphQL",
        "Node.js",
        "Jest",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://drive.google.com/file/d/1WX62CmU2zTO7L5pFUM452zN7G2CRMkPe/view",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi/news-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/news.png",
      video: "",
    },
    {
      title: "Cheff Mind AI",
      href: "https://www.chefmind.app/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Upload a photo of your ingredients and let AI craft personalized recipes. Transform everyday ingredients into extraordinary dishes.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI LLM",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.chefmind.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi/Chef_Mind_AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cheff-2.png",
      video: "",
    },
    {
      title: "Fitness AI",
      href: "https://fitness-ai-amber.vercel.app/",
      dates: "Jan 2025",
      active: true,
      description:
        "Personalized workout plans tailored to your fitness goals and preferences. My first AI project, providing a valuable learning experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI LLM",
      ],
      links: [
        {
          type: "Website",
          href: "https://fitness-ai-amber.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi/Fitness-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yoga.jpg",
      video: "",
    },
  ],
} as const;
