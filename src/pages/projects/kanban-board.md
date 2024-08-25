---
layout: ../../layouts/ProjectLayout.astro
title: My Awesome Project
date: 2023-08-12
author: Your Name
image: ../../../public/icon.jpg
---

## Links

- [GitHub Repository](https://github.com/belikedeep)
- [Live Demo](https://github.com/belikedeep)

## Kanban Board Project (v0.1.0)

This project implements a Kanban board web application using Next.js and a Prisma database.

### Features

- Visualize tasks in different stages (e.g., To Do, In Progress, Done)
- Drag and drop functionality for tasks between stages
- User authentication (potentially)

### Dependencies

This project uses a variety of libraries and frameworks:

- **Frontend:** Next.js, React, Framer Motion, React Icons, React-Spinners
- **Backend:** Prisma (database access)
- **Styling:** Tailwind CSS
- **Authentication:** Clerk.js (potential integration)
- **Development:** ESLint, TypeScript

### Usage

**1. Prerequisites**

- Node.js and npm installed ([https://nodejs.org/en/download](https://nodejs.org/en/download))

**2. Clone the Repository**

```
git clone https://your-github-repo.com/kanban.git
```

**3. Install Dependencies**

```
cd kanban
npm install
```

**4. Development Server**

```
npm run dev
```

This will start the development server at http://localhost:3000 by default.

**5. Build for Production**

```
npm run build
```

This generates an optimized production build in the `.next` folder.
