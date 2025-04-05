# Anastasis's Portfolio

My personal portfolio website built with SvelteKit, showcasing my projects, skills, and experience.

[View the live site](https://anastasis.dev)

## About This Project

This portfolio is built using [Riadh Adrani's Slick Portfolio template](https://github.com/RiadhAdrani/slick-portfolio-svelte), which I've customized to fit my needs and style. I've made several enhancements and modifications to make it my own:

- **Multiple Date Ranges**: Enhanced the experience and project cards to support multiple date ranges for each entry
- **Local Dependencies**: Replaced external dependencies with local implementations for better reliability
- **Custom Content**: Added my personal projects, skills, and experience information
- **Optimized Deployment**: Improved GitHub Actions workflow for more reliable deployments

## Technologies Used

- **SvelteKit**: Fast, efficient framework for building web applications
- **TypeScript**: For type safety and better developer experience
- **UnoCSS**: Atomic CSS engine for styling
- **GitHub Actions**: For automated deployment to GitHub Pages

## Features

- **Responsive Design**: Works on devices of all sizes
- **Dark/Light Mode**: Toggle between color schemes
- **Project Showcase**: Detailed project cards
- **Experience Timeline**: Chronological display of work experience
- **Skills Section**: Visual representation of technical skills
- **Resume**: Downloadable PDF of your resume

## Local Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/Anastasis-M/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Customization

The main data files are located in `src/lib/data/` and include:

- `experience.ts`: Work experience entries
- `projects.ts`: Project showcase entries
- `skills.ts`: Technical skills and categories
- `home.ts`: Main page content and links

Styles can be customized in `src/lib/index.scss`.

## Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The workflow is configured in `.github/workflows/deploy.yml`.

### Troubleshooting

If you fork this repository and encounter deployment issues:

1. Ensure GitHub Pages is enabled in your repository settings
2. Check that the workflow has proper permissions to deploy
3. Verify that the base path in `svelte.config.js` matches your repository name
