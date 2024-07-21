# My Portfolio

Welcome to my portfolio website. This site uses [Astro](https://astro.build/), a modern static site generator, and TypeScript.

![scrnli_7_21_2024_8-19-08 PM](https://github.com/user-attachments/assets/e7b941f5-05a0-4d85-b606-d7da20bde6a4)


## Features

- ✨ Clean and responsive design
- 🚀 Fast-loading pages
- 💼 Showcase of my projects
- 📄 Detailed information about my skills and experience
- 📱 Mobile-friendly
- 📊 Data-driven content using separate files for projects, skills, and uses
- 🎨 Customizable theme and layout

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/belikedeep/portfolio-v0.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd portfolio-v0
   ```

3. **Install dependencies**:

   ```bash
   pnpm install
   ```
   or
   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   pnpm dev
   ```
   or
   ```bash
   npm run dev
   ```

The site should now be available at `http://localhost:4321`.

## Project Structure

```
portfolio-v0/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── utils/
│   └── styles/
├── public/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Data Files

This portfolio uses separate data files to manage content:

- `projects.ts`: Contains information about your projects.
- `skills.ts`: Lists your skills and proficiencies.
- `uses.ts`: Describes the tools and technologies you use.

To update your portfolio content, modify these files located in the `src/data` directory.

## Customization

### Theming

You can customize the theme by modifying the CSS variables in `src/styles/global.css`. This allows you to easily change colors, fonts, and other style properties.

### Layout

The main layout components are located in the `src/layouts` directory. You can modify these to change the overall structure of your portfolio.

## Building for Production

To create a production-ready build of your portfolio, run:

```bash
pnpm build
```
or
```bash
npm run build
```

This will generate static files in the `dist` directory.

## Deployment

You can deploy this portfolio on various hosting platforms. Some popular options include:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

Most of these platforms offer easy deployment directly from your GitHub repository.

## Contributing

Contributions are welcome! If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using [Astro](https://astro.build/) and TypeScript.
