import "./Hero.css"
import Doggy from './Doggy.tsx'

const Hero = () => {
    return (
        <section id="hero" className="hero">
          <div className="hero-content">
            <div className="text">
              <h1>Hi, I'm Alexander</h1>
              <p>
                I'm a web developer passionate about building functional and responsive websites.
              </p>
              <a href="./alexander-forrest-resume.pdf" download className="download-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M.5 9.9V14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9.9a.5.5 0 0 0-1 0V14a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V9.9a.5.5 0 0 0-1 0z" />
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
      </svg>
      Download Resume
    </a>
            </div>
            <div className="">
              <Doggy />
            </div>
          </div>
        </section>
      );
};

export default Hero;