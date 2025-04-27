import { motion } from "framer-motion";
import "./ProjectsComp.css"

const projects = [
  {
    title: "Butcher's Circus",
    description: "A community-driven web platform created to track tournament standings and player rankings for an online game.",
    image: "img/Butcher'sCircus.png",
    link: "https://metrolink.host/AlexanderForrest/BCPL/",
  },
  {
    title: "PlantParadise",
    description: "E-commerce-style plant app where users can explore different plant types. Built as an experiment to learn and apply React concepts.",
    image: "img/PlantParadise.png",
    link: "https://metrolink.host/AlexanderForrest/PlantParadise/",
  },
  {
    title: "Tic-Tac-Toe",
    description: "Multiplayer TicTacToe game featuring private rooms via dynamic room IDs. Designed to experiment with sockets, routing, and real-time communication.",
    image: "img/TicTacToe.png",
    link: "https://metrolink.host/AlexanderForrest/Tic-Tac-Toe/",
  },
  {
    title: "Weather Forecast",
    description: "Sleek weather application that fetches real-time data using a public Weather API.",
    image: "img/WeatherApp.png",
    link: "https://metrolink.host/AlexanderForrest/Weather/",
  },
  {
    title: "To Do List",
    description: "Simple to do list app made with react and typescript",
    image: "img/ToDo.png",
    link: "https://metrolink.host/AlexanderForrest/To-Do/",
  },
  {
    title: "Calculator",
    description: "Calculator app made with react and typescript",
    image: "img/Calculator.png",
    link: "https://metrolink.host/AlexanderForrest/Calculator/",
  },
  {
    title: "Reaction Tester",
    description: "Interactive app that challenges users to test and improve their reaction speed.",
    image: "img/ReactionTester.png",
    link: "https://metrolink.host/AlexanderForrest/ReactionTester/",
  },
  {
    title: "How-Many-Fingers",
    description: "This interactive How Many Fingers game challenges users to guess the number of fingers being held",
    image: "img/HowManyFingers.png",
    link: "https://metrolink.host/AlexanderForrest/HowManyFingers/",
  },
];

const ProjectsComp = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          initial={{ opacity: 0, y: 50 }} // Start invisible & move up
          animate={{ opacity: 1, y: 0 }} // Fade in & slide up
          transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each project slightly
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsComp;
