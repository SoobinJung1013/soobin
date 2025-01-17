## Portfolio Website

This repository contains the code for my personal portfolio website.

## Template

This project is based on the template by [Vinay Somawat](https://vinaysomawat.github.io/).

## Features

- Fully responsive design.
- Easily customizable portfolio sections.
- Includes sections for about, skills, work experience, projects, articles, mentoring, and contact information.

---

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)
- **npm**: Comes with Node.js installation.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SoobinJung1013/soobin.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd soobin
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the project locally

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open the project in your browser:**
   - By default, the project will be available at `http://localhost:8080`.

---

## Deployment

This project is hosted using **GitHub Pages**. Follow the steps below to deploy your own version:

### Steps to Deploy on GitHub Pages

1. **Push changes to GitHub:**
   Ensure your latest changes are pushed to the `main` branch of your repository:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Enable GitHub Pages:**

   - Go to your repository on GitHub.
   - Navigate to **Settings** > **Pages**.
   - Under the **Source** section, select the `main` branch and `/ (root)` folder.
   - Click **Save**.

3. **Access your deployed site:**
   - GitHub Pages will provide a URL where your site is hosted (e.g., `https://<username>.github.io/soobin`).

### SPA (Single Page Application) Configuration

If your portfolio uses client-side routing (e.g., React Router), create a `404.html` file to redirect all routes to `index.html`. Add this file in the root directory:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=./" />
  </head>
  <body></body>
</html>
```

---

## Project Structure

```
project-folder/
├── index.html
├── index.js
├── style.css
├── images/
└── other-assets/
```

- **index.html**: Main HTML file.
- **index.js**: Contains JavaScript logic for the site.
- **style.css**: CSS for styling the portfolio.
- **images/**: Folder for images used in the portfolio.
- **other-assets/**: Additional assets like fonts or icons.

---

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.

---

## Author

- **Soobin Jung**  
  GitHub: [SoobinJung1013](https://github.com/SoobinJung1013)
