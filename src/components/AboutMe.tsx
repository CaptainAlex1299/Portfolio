import "./AboutME.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-container">
        <h2 className="">Front-End Developer | Building Interactive Web Experiences 👋</h2>
        <p className="">
        Hi, I'm Alexander, a web developer from South Africa. I specialize in front-end development with HTML, CSS, JavaScript, and React, and have experience with PHP and SQL for back-end work.
        I’m passionate about creating responsive, user-friendly websites and continually improving my skills in Node.js and TypeScript.
        </p>
        <p className="about-text">
        I’m eager to work on projects that are meaningful and have a real impact.
        I’m constantly learning new technologies and development practices to stay up-to-date and continue growing as a developer.
        </p>
        <a href="#contact" className="">
          Contact Me
        </a>
      </div>
      <div className="image-section">
      <img className="my-image" src="img/myimage.jpg"/>
      </div>
    </section>
  );
};

export default AboutMe;
