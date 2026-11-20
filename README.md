# Personal Portfolio Website

A responsive personal portfolio website built with React and Tailwind CSS. The website showcases my background, education, technical skills, and software development projects.

## Features

- **Bilingual Support:** Switch between English and Turkish.
- **Dark / Light Mode:** Toggle between dark and light themes.
- **LocalStorage:** Saves language and theme preferences.
- **Responsive Design:** Compatible with desktop, tablet, and mobile devices.
- **Global State Management:** Manages application-wide state using React Context API.
- **API Integration:** Uses Axios for external API communication with GET and POST requests.
- **Toast Notifications:** Displays success and error notifications using React Toastify.
- **Reusable Components:** Built with modular and reusable React components.

## Technologies

- React
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React Context API
- Axios
- React Toastify
- LocalStorage

## Project Structure

react-portfolio/
├── public/
│   ├── favicon.svg
│   ├── hero.jpeg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Profile.jsx
│   │   ├── Projects.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   ├── AppContext.js
│   │   ├── AppContext.jsx
│   │   └── useApp.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd react-portfolio
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
```

## API Integration

Axios is configured in `src/services/api.js` and uses JSONPlaceholder as a fake REST API service.

- **GET:** Retrieves sample data from `/posts/1`.
- **POST:** Sends the selected language's portfolio data to `/posts`.

The application handles loading, success, and error states for both requests and displays feedback through toast notifications.

**Note:** JSONPlaceholder simulates POST requests. Submitted data is not permanently stored.

## Main Concepts

This project demonstrates practical use of:

- Component-based architecture
- React Hooks
- Context API for global state management
- Props and data flow
- Axios and REST API requests
- LocalStorage
- Toast notifications
- Responsive design with Tailwind CSS

## Author

**Doğa Aslan**

Computer Engineering Graduate | Full Stack Developer

- GitHub: [doaslan](https://github.com/doaslan)
- LinkedIn: [Doğa Aslan](https://www.linkedin.com/in/doaslan/)