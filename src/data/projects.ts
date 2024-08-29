interface Project {
  title: string;
  description: string;
  link: string;
  stack: string;
  image?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "Typing Dash",
    link: "https://github.com/belikedeep/typing-dash",
    stack: "Turbo Repo, Full Stack, socket.io, Nextjs, Typescript",
    description:
      "A multiplayer application enabling users to compete against each other in typing challenges.",
    image: "../../../typing-dash.jpeg",
    slug: "typing-dash", // This should match the Markdown file name
  },
  {
    title: "NPM PACKAGE",
    link: "https://github.com/belikedeep/kanbanBoard",
    stack: "NPM Package, Javascript",
    description: "A NPM Package to detect abusive words",
    image: "../../../npm.jpeg",
    slug: "npm-package",
  },
  {
    title: "Flair Ecommerce",
    link: "https://github.com/belikedeep/flair-ecommerce-website",
    stack: "Nextjs, Sanity.io, Shadcn-ui, Stripe, Typescript",
    description:
      "An interactive, and responsive Ecommerce store featuring Product listing, sorting, payements",
    image: "../../../flair.jpeg",
    slug: "flair-ecommerce",
  },
  {
    title: "Kanban Board",
    link: "https://github.com/belikedeep/kanbanBoard",
    stack: "Nextjs, Clerk, MongoDB, Framer Motion, Prisma",
    description:
      "A simple kanban board featuring dnd functionality, real-time updates and data persistance using prisma",
    image: "../../../kanban-board.jpeg",
    slug: "kanban-board",
  },
  {
    title: "Crypto Tracker",
    link: "https://github.com/belikedeep/crypto-tracker",
    stack: "Vite(React), React Router, Axios",
    description:
      "A crypto tracker app using React, enabling users to monitor real-time cryptocurrency prices and trends ",
    image: "../../../crypto-tracker.jpeg",
    slug: "crypto-tracker",
  },
];
