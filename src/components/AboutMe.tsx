import "./AboutME.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-container">
        <h2 className="">Full-Stack Developer | Software Tester</h2>
        <p className="">
        Hi, I'm Alexander, a web developer from South Africa. I specialize in both front and back-end development with HTML, CSS, JavaScript, and React, PHP, SQL and have experience with and Java.
        I enjoy building applications and I'm improving my skills in Node.js, TypeScript and Java. I've also learned software testing using tools like Playwright.
        </p>
        <p className="about-text">
        I'm eager to work on projects that are meaningful and have a real impact.
        I'm constantly learning new technologies and development practices to stay up-to-date and continue growing as a developer.
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
