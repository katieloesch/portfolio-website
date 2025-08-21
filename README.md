# Developer Portfolio Website

## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning/Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

I started the development of this portfolio project after completion of the General Assemlby Software Engineering Immersive Course in order to showcase the projects I had built and the skills I had gained during the course.

## <a name="deployment-link"></a> 2. Deployment link

:link: &nbsp;&nbsp;https://katieloesch.co.uk/

## <a name="installation"></a> 3. Installation

#### Package Manager: npm (v9.5.0)

- <sub>[website](https://www.npmjs.com/)</sub>
- <sub>[GitHub Repository](https://github.com/npm)</sub>

#### Getting Started

- Ensure [Git](https://git-scm.com/) is installed on your machine.
- Clone the repository by running this command in your terminal:

```zsh
git clone https://github.com/katieloesch/portfolio.git
```

- Navigate to the project directory to install dependencies:

```zsh
cd portfolio
```

### Running the Application Locally in a local development environment:

**1. Install Dependencies**

- Run the following command in the project’s root directory to install all necessary dependencies:

```zsh
npm install
```

**2. Start the Development Server**

- After installing the dependencies, start the development server with:

```zsh
npm start
```

**3. Access the Application**

- The development server will start at `http://localhost:3000`.
- By default, your web browser should automatically open and navigate to this address.
- If it doesn’t, you can manually access the application by entering `http://localhost:3000` in any web browser.

## <a name="technologies"></a> 4. Technologies Used

### Core Technologies

- **ReactJS** (v18.2.0)

  - <sub>primary framework used to build the application</sub>
  - <sub>created using the create-react-app tool</sub>
  - <sub>[React documentation](https://reactjs.org/)</sub>
  - <sub>[Create React App documentation](https://create-react-app.dev/)</sub>

<br>

```zsh
npx create-react-app .
```

- **SCSS**
  - <sub>CSS preprocessor used for styling the application</sub>
  - <sub>[SCSS documentation](https://sass-lang.com/guide)</sub>

### Key Dependencies

- **react-router** (v6.12.1)
  - <sub>a library that provides the foundational routing components and logic for React applications</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-router)</sub>
  - <sub>[GitHub repository](https://github.com/remix-run/react-router)</sub>
  - <sub> [website](https://reactrouter.com/en/main)</sub>
- **react-router-dom** (v6.12.1)
  - <sub>an implementation of react-router that includes additional components for browser-based routing</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-router-dom)</sub>
  - <sub>[GitHub repository](https://github.com/remix-run/react-router)</sub>
  - <sub> [website](https://reactrouter.com/en/main)</sub>
- **@emailjs/browser** (v3.11.0)
  - <sub>package for sending emails directly from the browser using the EmailJS service</sub>
  - <sub>[npm page](https://www.npmjs.com/package/@emailjs/browser)</sub>
  - <sub>[GitHub repository](https://github.com/emailjs-com/emailjs-sdk)</sub>
  - <sub> [website](https://www.emailjs.com/)</sub>
- **intersection-observer** (v0.12.2)
  - <sub>a polyfill for the Intersection Observer API allowing you to observe when elements enter or exit the viewport or a parent container</sub>
  - <sub>[npm page](https://www.npmjs.com/package/intersection-observer)</sub>
  - <sub>[GitHub repository](https://github.com/GoogleChromeLabs/intersection-observer)</sub>
- **framer-motion** (v3.11.0)
  - <sub>an open source animation library for React</sub>
  - <sub>[npm page](https://www.npmjs.com/package/framer-motion)</sub>
  - <sub>[GitHub repository](https://github.com/framer/motion)</sub>
  - <sub> [website](https://www.framer.com/motion/)</sub>
- **react-transition-group** (v4.4.5)
  - <sub>a library for handling animations and transitions in React applications</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-transition-group)</sub>
  - <sub>[GitHub repository](https://github.com/reactjs/react-transition-group)</sub>
  - <sub> [website](https://reactcommunity.org/react-transition-group/)</sub>
- **Sass** (v1.77.8)
  - <sub>CSS preprocessor used for styling the application</sub>
  - <sub>[npm page](https://www.npmjs.com/package/sass)</sub>
  - <sub>[GitHub repository](https://github.com/sass/dart-sass)</sub>
- **react-icons** (v4.9.0)
  - <sub>a free and open-source project providing icons for use in React projects</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-icons)</sub>
  - <sub>[GitHub repository](https://github.com/react-icons/react-icons)</sub>
  - <sub> [website](https://react-icons.github.io/react-icons/)</sub>
- **react-tsparticles** (v2.10.1)
  - <sub>a React component library that provides a way to integrate customizable particle animations into React applications</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-tsparticles)</sub>
  - <sub>[GitHub repository](https://github.com/tsparticles/react)</sub>
  - <sub> [website](https://particles.js.org/)</sub>
- **react-vertical-timeline-component** (v3.6.0)
  - <sub>a React component library that provides a pre-built, customizable vertical timeline component/sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-vertical-timeline-component)</sub>
  - <sub>[GitHub repository](https://github.com/stephane-monnot/react-vertical-timeline)</sub>
  - <sub> [website](https://stephane-monnot.github.io/react-vertical-timeline/#/)</sub>

### UI and Design

- **Fonts**

  - main: \'**Sofia Pro**\', designed by **Olivier Gourvat (Mostardesign)**
    - <sub>[font.download](https://font.download/font/sofia-pro)</sub>
  - editorial/headings: \'**Astro**\' designed by **Nestype**
    - <sub>[font.download](https://font.download/font/astro-futuristic-font)</sub>
    - <sub>[cufon fonts](https://www.cufonfonts.com/font/astro)</sub>
  - typewriter animation: \'**Ubuntu Mono**\' designed by **Dalton Maag**
    - <sub>[Googe Fonts](hhttps://fonts.google.com/specimen/Ubuntu+Mono)</sub>
    - <sub>[font.download](https://font.download/font/ubuntu-mono-2)</sub>
    - <sub>[Font Squirrel](https://www.fontsquirrel.com/fonts/ubuntu-mono)</sub>
    <!-- - typewriter animation: \'**Roboto Mono**\' designed by **Christian Robertson**
    - <sub>[Googe Fonts](https://fonts.google.com/specimen/Roboto+Mono)</sub>
    - <sub>[font.download](https://font.download/font/roboto-mono)</sub> -->

- **Icons**
  - **Iconify**
    - <sub>A free and open-source framework providing access to a vast number of icons, designed for use across various platforms and environments, including React.</sub>
    - <sub>[website](https://icon-sets.iconify.design/)</sub>
    - <sub>[GitHub repository](https://github.com/iconify/iconify/tree/main)</sub>
    - <sub>[license](https://github.com/iconify/iconify/blob/main/license.txt)</sub>
  - **Font Awesome**
    - <sub>A popular icon library offering a large set of scalable and customizable icons, with a free version that is open source.</sub>
    - <sub>[website](https://fontawesome.com/)</sub>
    - <sub>[GitHub repository](https://github.com/FortAwesome/Font-Awesome)</sub>
    - <sub>[license](https://fontawesome.com/license/free)</sub>
  - **React Icons**
    - <sub>A free and open-source project providing icons for use in React projects.</sub>
    - <sub> [website](https://react-icons.github.io/react-icons/)</sub>
    - <sub>[GitHub repository](https://github.com/react-icons/react-icons)</sub>
    - <sub>[license](https://github.com/react-icons/react-icons/blob/master/LICENSE)</sub>
- **Timeline** (Experience Section): **react-vertical-timeline-component** (v3.6.0)
  - <sub>a React component library that provides a pre-built, customizable vertical timeline component/sub>
  - <sub> created by [Stéphane Monnot](https://github.com/stephane-monnot/react-vertical-timeline/commits?author=stephane-monnot)</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-vertical-timeline-component)</sub>
  - <sub>[GitHub repository](https://github.com/stephane-monnot/react-vertical-timeline)</sub>
  - <sub> [website](https://stephane-monnot.github.io/react-vertical-timeline/#/)</sub>

### Development Tools

- **Git / GitHub**
  - <sub>used for version control and collaboration</sub>
  - <sub>[Git website](https://git-scm.com/)</sub>
  - <sub>[GitHub website](https://github.com/)</sub>
- **Visual Studio Code (VSCode)**
  - <sub>code editor used for development</sub>
  - <sub>[website](https://code.visualstudio.com/)</sub>
  - <sub>[GitHub repository](https://github.com/microsoft/vscode)</sub>
- **Google Chrome & Chrome DevTools**
  - <sub>used for testing, debugging, and developing in the browser</sub>
  - <sub>[Google Chrome website](https://www.google.com/chrome/)</sub>
  - <sub>[Chrome DevTools documentation](https://developer.chrome.com/docs/devtools)</sub>
- **Excalidraw**
  - <sub>tool used to create wireframes for the application</sub>
  - <sub>[website](https://excalidraw.com/)</sub>
  - <sub>[GitHub repository](https://github.com/excalidraw/excalidraw)</sub>
- **ChatGPT4o**:
  - <sub>generative AI tool used for debugging, development support and generating artwork for the README file</sub>
  - <sub>[website](https://chat.openai.com/)</sub>
  - <sub>[GitHub repository](https://github.com/openai)</sub>
- **Hostinger**:
  - <sub>web hosting provider used to deploy the application</sub>
  - <sub>[UK website](https://www.hostinger.co.uk)</sub>

### Resources and tutorials

- initial portfolio structure & navigation dots:
  - [Build and Deploy a Fullstack Responsive Portfolio Website | ULTIMATE Step By Step Tutorial 2023](https://www.youtube.com/watch?v=3HNyXCPDQ7Q&list=PL5TCQHRtvHGmk69zb9GYb62MQMAmVQStF&index=3) by [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
- responsive navigation menu:
  - [Animated Portfolio Website with React & Framer Motion | React Project for Beginners](https://www.youtube.com/watch?v=CHGHuF24Cjw&list=PL5TCQHRtvHGkuR2YZDf_2lDFuc9m5OUlO&index=3) by [Lama Dev](https://www.youtube.com/@LamaDev)
- timeline (experience section):
  - [Simple Timeline for your Portfolio Website | React Tutorial](https://www.youtube.com/watch?v=-rnkToU2_lw) by [Aleks Popovic](https://www.youtube.com/@AleksPopovic)
- card hover effect (work section):
  - [How To Create An Image Hover Effect With CSS](https://www.youtube.com/watch?v=tF3RE5CGt9U&list=PL5TCQHRtvHGn_xv-dWP9P_rDofoxMUQHQ) by [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)
- image carousel (work section):
  - [Build a Slider with React.js](https://www.youtube.com/watch?v=og3wCO98HkQ) by [The Web School.](https://www.youtube.com/@TheWebSchool)
- button fill effect:
  - [Button Ripple Hover Effects using CSS & Javascript](https://www.youtube.com/watch?v=WOSaNbpHNqU) by [Online Tutorials | Md Irshad Ansari](https://www.youtube.com/@OnlineTutorialsYT)

## <a name="deliverables"></a> 5. Deliverables

### MVP

- make a website that showcases
  - easy-to-find contact information - email, GitHub, Linkedin and other relevant links
    - include a contact form
  - about you section
    - brand statement + background
    - info about industry interests (Meetups, online resources, podcasts, coding online courses etc)
    - What do you do outside of work? What are your interests?
    - Blogs
  - experience + education
  - skills & methodologies
  - transferrable previous experience
  - projects including:
    - project name
    - description
    - timeframe
    - Solo vs Group
    - Links to GitHub ReadMe & deployed project
    - A visual
- make the website mobile responsive
- deploy portfolio website online

### Stretch Goals

- animations
- effects

## <a name="planning"></a>6. Planning / Build Process

### User Stories

- As a user I should be able to easily find contact information including email, linkedIn and GitHub accounts.
- As a user I should be able to send a message via contact form.
- As a user I should be able to easily find relevant experience, education and skills.
- As a user I should be able to easily find information on previous projects.
- As a user I should be able to navigate the website from any device.

I started the building process for this project on 13/06/2023.
Initial deployment on gh-pages: 26/06/2023.
Deployment to [custom domain](katieloesch.co.uk) obtained from [Hostinger](https://www.hostinger.co.uk) on 29/06/2023.

## 7. <a name="challenges"></a> Challenges

- depending on how much text is provided to the modal showing details on each project, the container overflows but by default you can't scroll down on a modal
- In order to scroll on overlay text the scroll on the body needs to be disabled first which took me a while to figure out.

## 8. <a name="wins"></a> Wins

- fully responsive design
- implementation of animations + effects
- I'm glad I decided to use React.js for my portfolio as I definitely learned a lot doing this project and feel more confident using this framework.

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

## <a name="future-improvements"></a> 10. Future Improvements

- include information about my industry interests
- include blogs + podcasts I'm interested in
