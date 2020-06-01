import React from "react";
import cloud from "./assets/wordcloud-small.png";
import { Link } from "react-router-dom";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import WorkPanel from "./WorkPanel";

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <h4 className="resume-aboutme">
          I am a solution-oriented self-starter with a focus on software
          engineering and product management. <br></br>With my upbeat
          personality and ability to problem-solve under pressure, I can serve
          as a great addition to any team.
        </h4>
        <div class="about-flex-grid">
          <div class="col1">
            <h4 className="about-h4-left">Front-End</h4>
            <h5 className="about-h5-left">
              HTML <br />
              CSS <br />
              Javascript <br />
              React <br />
              Responsive Design <br />
              Storybook
            </h5>
            <h4 className="about-h4-left">Deployment</h4>
            <h5 className="about-h5-left">
              Git / Github <br />
              Heroku <br />
              Bitbucket <br />
              Netlify <br />
              Amazon AWS <br />
              Firebase <br />
            </h5>
            <h4 className="about-h4-left">Design</h4>
            <h5 className="about-h5-left">
              Final Cut Pro (Certified)
              <br />
              Adobe Photoshop <br />
              Adobe InDesign
              <br />
              Adobe XD
              <br />
              Adobe Premiere
              <br />
              Adobe Muse
              <br />
            </h5>
          </div>
          <div class="col2 about-wordcloud">
            <img className="about-wordcloud" src={cloud} />
          </div>
          <div class="col3">
            <h4 className="about-h4-right">Backend</h4>
            <h5 className="about-h5-right">
              Express.js
              <br />
              Node.js
              <br />
              MongoDB
              <br />
              Python
              <br />
              RESTful API
              <br />
              Django
              <br />
              SQL
              <br />
              PostgreSQL
              <br />
              Peewee
              <br />
            </h5>
            <h4 className="about-h4-right">Project Management</h4>
            <h5 className="about-h5-right">
              Rapid Prototyping
              <br />
              Google Analytics <br />
              Google Play Console
              <br />
              App Store Connect
              <br /> Jira
              <br />
              Trello <br />
            </h5>{" "}
            <h4 className="about-h4-right">Misc. Skills</h4>
            <h5 className="about-h5-right">
              Unix
              <br />
              VS Code <br />
              MS Office (Certified)
              <br />
              Wordpress
              <br />
              Webflow CMS
              <br />
              Social Media / Branding
              <br />
            </h5>{" "}
          </div>
        </div>
        <div className="WorkPanel-container">
          {" "}
          <h1 className="experience-header">Recent Experience</h1>
          <WorkPanel></WorkPanel>{" "}
          <div class="resume-flex-grid">
            <Link to="/Resume">
              <h5 className="resume-button">View Full Resume</h5>{" "}
            </Link>

            <p></p>
            <a href="https://github.com/skut21x-ga/portfolio/raw/master/src/assets/ScottKutler-SoftwareEngineerResume.pdf">
              <h5 className="resume-button">Download Resume (.PDF)</h5>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
