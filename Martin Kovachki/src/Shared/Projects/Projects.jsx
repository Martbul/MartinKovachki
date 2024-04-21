import "./Projects.css";
export default function Projects() {
  return (
    <>
      <div className="container container-border c-project">
        <div className="title">
          <h1>Projects</h1>
        </div>

        <div className="project">
          <div className="content">
            <h5>
              <a href="https://martbul.github.io/angular-final-project/">
                SoftUni Final Project
              </a>
            </h5>
            <p>
           New app store. Web app where people can share their apps. You can develop, share and buy applications.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="title"></div>
          <div className="content">
            <h5>
              <a href="https://martbul.github.io/Alyst2.0/">Alyst2.0</a>
            </h5>
            <p>
              Modern website desing for a sotware agency that builds AI
              solutions
            </p>
          </div>
        </div>

        <div className="project">
          <div className="content">
            <h5>
              <a href="https://martbul.github.io/pearl.bg/">PearlBg</a>
            </h5>
            <p>
              Web app for second hand jewery. Everyone is welcome to sell and buy.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="content">
            <h5>
              <a href="https://martbul.github.io/ALYST/">Alyst AI</a>
            </h5>
            <p>
              Basic site for service base business. Showing what services they offer, pricing and demos.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="content">
            <h5>
              <a href="https://martbul.github.io/Bind/">Bind Delivery</a>
            </h5>
            <p>
              Web app with the idea of Uber, but for groceries - people
              deliverying groceries.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="content">
            <h5>
              <a href="https://github.com/Martbul/NodeJs-Express-Server">NodeJs-Express Server</a>
            </h5>
            <p>
              Fully developed, high-quality backend with NodeJs, Express and MongoDB. Can be used as templete for structuring other webapps.
            </p>
          </div>
        </div>


        <div className="project">
          <div className="content">
            <h5>
              <a href="https://github.com/Martbul/FaceDetector">AI Face Detector</a>
            </h5>
            <p>
            AI model for face detection. It connects to the camera of your phone and if spots a face in the frame it draws a square around it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
