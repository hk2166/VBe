![VB Enterprises Website](./LandingPage.png)

# VB Enterprises Website

A React-based single-page application (SPA) for **VB Enterprises**, offering premium safety nets for residential, commercial, and industrial purposes. This repository contains the source code for the company website, showcasing home, about, services, projects pages, and optimized for SEO and performance.

---

## Table of Contents

* [Features](#features)
* [Demo](#demo)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Available Scripts](#available-scripts)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## Features

* **SEO Optimization** with React Helmet Async
* **Lazy Loading** for components to improve performance
* **Responsive Design** using Bootstrap 5 and AOS animations
* **Dynamic Routing** with React Router for Home, About, Services, and Projects pages
* **Web Vitals** reporting for performance monitoring
* **Schema.org Markup** for Projects list in JSON-LD

---

## Demo

> *Link to live demo (replace with your URL)*

```text
https://www.vbsafetynets.in
```

---

## Tech Stack

* **React** 18.x
* **React DOM**
* **React Router DOM**
* **React Helmet Async** for SEO
* **Bootstrap 5** for styling
* **AOS** (Animate on Scroll)
* **Web Vitals** for performance metrics
* **Jest & React Testing Library** for testing

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/vb-enterprises.git
   cd vb-enterprises
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

In the project directory, you can run:

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm start`     | Runs the app in development mode.        |
| `npm test`      | Launches the test runner.                |
| `npm run build` | Builds the app for production.           |
| `npm run eject` | Ejects CRA configuration (irreversible). |

---

## Project Structure

```text
vb-enterprises/
├── public/
│   └── index.html
├── src/
│   ├── components/        # Lazy-loaded UI components
│   ├── pages/             # Top-level route pages
│   │   ├── home.js
│   │   ├── about.js
│   │   ├── services.js
│   │   └── projects.js
│   ├── SEOHelmet.js       # SEO meta tags component
│   ├── App.js             # Main app & routing
│   ├── index.js           # Entry point
│   ├── reportWebVitals.js # Performance metrics
│   └── setupTests.js      # Testing configuration
├── package.json
└── README.md
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please ensure all tests pass and adhere to the existing code style.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

**VB Enterprises**

* Website: [https://www.vbsafetynets.in](https://www.vbsafetynets.in)
* Email: [info@vbsafetynets.in](mailto:info@vbsafetynets.in)
* GitHub: [Artflix-Design](https://github.com/Artflix-Design/VBEnterprise)
