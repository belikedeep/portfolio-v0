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
    title: "Kanban Board",
    link: "https://github.com/belikedeep/kanbanBoard",
    stack: "React, Node.js, MongoDB",
    description: "A brief description of the awesome project",
    image: "../../../public/icon.jpg",
    slug: "kanban-board", // This should match the Markdown file name
  },
  // {
  //   title: "Typing Dash",
  //   description:
  //     "A real-time typing competition platform that pits users against each other in a race to accurately transcribe passages at lightning-fast speeds.",
  //   link: "https://github.com/belikedeep/typing-dash",
  //   stack: "Turborepo, Next.js, Tailwind, pnpm, typescript, sockets.io",
  //   image: "https://s2.svgbox.net/illlustrations.svg?ic=working",
  // },
  // {
  //   title: "ChatWaves",
  //   description:
  //     "A real-time chat application developed using the MERN stack,featuring secure user authentication, responsive design, and integration of WebSocket.",
  //   link: "https://github.com/belikedeep/ChatWaves-realtime-chat-app",
  //   stack: "MERN + Socket.io + TailwindCSS + Daisy UI",
  //   image: "https://s2.svgbox.net/illlustrations.svg?ic=work-from-home-1",
  // },
  // {
  //   title: "Kanban Board",
  //   description:
  //     "A dynamic and responsive Kanban Board application developed with Next.js, with seamless task management and an appealing user Interface.",
  //   link: "https://github.com/belikedeep/kanbanBoard",
  //   stack: "Next.js, Framer Motion, Prisma, Tailwind, Clerk, TypeScript",
  //   image: "https://s2.svgbox.net/files.svg?ic=next",
  // },
  // {
  //   title: "Flair",
  //   description:
  //     "A modern and responsive e-commerce platform powered by Next.js, Stripe for secure payments, and Sanity for a flexible content management system.",
  //   link: "https://github.com/belikedeep/flair-ecommerce-website",
  //   stack: " Next.js, Sanity.io, Stripe, Tailwind",
  //   image: "https://s2.svgbox.net/illlustrations.svg?ic=socks",
  // },
  // {
  //   title: "TokSwap defi",
  //   description:
  //     "Developed a user-friendly and secure decentralized exchange (DEX) frontend interface facilitating seamless cryptocurrency trading and liquidity provision.",
  //   link: "https://github.com/belikedeep/tokswap-defi-frontend",
  //   stack: "React, CSS",
  //   image: "https://s2.svgbox.net/crypto.svg?ic=0xbtc",
  // },
];
