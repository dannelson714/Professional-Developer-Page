import React from 'react';
import Portfolio from './portfolio'
import Header from './components/header'
import Footer from './components/footer'
import backgroundPic from '../images/IMG_2056 2.jpeg'
import "../styles/Projects.css"


import pandemicBlightPic from '../images/65581C0C-17DB-4BDE-ADBA-BE742076CC08_1_201_a.jpeg';
import weatherDashboardPic from '../images/B147618C-64A7-4AEE-9F96-4AE2D2767DD7_1_201_a.jpeg';
import notetakerAppPic from '../images/56D110C2-B28A-42A3-AD9E-8807C032CB02_1_105_c.jpeg';
import phillyPlannerPic from '../images/170621734-8cd7e83f-0f38-47e1-9ce2-484d27f4712c.png';
import workDayScheduler from '../images/Workday_Scheduler.jpeg';
import musicTheoryQuizPic from '../images/Music_theory_quiz.jpeg';
const projects = [
  {
      id: 1,
      name: "Pandemic Blight",
      img: pandemicBlightPic,
      githubURL: "https://github.com/dannelson714/Pandemic-Blight",
      deployedURL: "https://dwarrick91.github.io/Pandemic-Blight/",
      tech: "HTML | CSS | Javascript | Materialize | jQuery | Chart.JS"
  },
  {
    id: 2,
    name: "Weather Dashboard",
    img: weatherDashboardPic,
    githubURL: "https://github.com/dannelson714/Weather-Dashboard",
    deployedURL: "https://dannelson714.github.io/Weather-Dashboard",
    tech: "HTML | CSS | Javascript | Bootstrap | jQuery | Popper.js | Moment.js"
},
{
  id: 3,
  name: "Notetaker App",
  img:notetakerAppPic,
  githubURL: "https://github.com/dannelson714/Note-Taker",
  deployedURL: "https://serene-shore-33969.herokuapp.com/",
  tech: "HTML | CSS | Javascript | Express.js | Insomnia | Heroku | RESTful APIs"
},
{
  id: 4,
  name: "Philly Planner",
  img: phillyPlannerPic,
  githubURL: "https://github.com/dannelson714/philly-planner",
  deployedURL: "https://sheltered-lowlands-05757.herokuapp.com/",
  tech: "React | Apollo | GraphQL | Express | Mongoose | BCrypt | JWT"
},
{
  id: 5,
  name: "Work Day Scheduler",
  img: workDayScheduler,
  githubURL: "https://github.com/dannelson714/Work-Day-Scheduler",
  deployedURL: "https://dannelson714.github.io/Work-Day-Scheduler",
  tech: "HTML | CSS | Javascript | Bootstrap | jQuery | Moment.js"
},
{
  id: 6,
  name: "Music Theory Quiz",
  img: musicTheoryQuizPic,
  githubURL: "https://github.com/dannelson714/Music-Theory-Quiz",
  deployedURL: "https://dannelson714.github.io/Music-Theory-Quiz",
  tech: "HTML | CSS | Javascript | Browser APIs"
},

]

export default function Projects() {
  return (
    <div>
      <Header />
      <div style={{
        height: "350px", 
        width:"100%", 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('${backgroundPic}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // position: "relative",
        }}>
      </div>
      <div className="portfolioPage">
        <br>
        </br>
        <h1 className="portfolioTitle">Portfolio Page</h1>
        <Portfolio projects = { projects } />
        <Footer />
      </div>
    </div>
  );
}