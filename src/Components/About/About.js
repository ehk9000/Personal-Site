import React from 'react';
import ekPic from '../../assets/images/Ek-Profile.jpg';

const About = () => {
  return (
    <div>
      <section className="about-wrapper">
        <img src={ekPic} alt="Erik Konner Profile" className="prof-pic"/>
        <h2>About Me</h2> 
        <article className="about-me">
          <p>Hi, my name is Erik Konner. I am a former finance and customer service associate 
            turned software developer. With my customer service and office administration 
            background in the finance industry, coupled with my technical training, 
            I thrive at solving complex concepts and designing crisp, intuitive user 
            experiences with comprehensive teams. As a quick learner, creative problem solver
            and enthusiastic collaborator, I have found my passion for coding.</p>
        </article>
      </section>
    </div>
  )
}

export default About;