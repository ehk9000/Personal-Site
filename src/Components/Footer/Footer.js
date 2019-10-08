import React from 'react';
import githubIcon from '../../assets/images/github-logo.svg'
import linkedInIcon from '../../assets/images/linkedin-logo.svg';
import resumeIcon from '../../assets/images/profiles.svg';
import emailIcon from '../../assets/images/email-logo.svg';
import resume from '../../assets/Erik_Konner_Resume.pdf';


const Footer = () => {
  return (
    <footer>
      <section>
        <a href="https://github.com/ehk9000">
          <img src={githubIcon} alt="Github Icon"/>
        </a>
        <a href="https://www.linkedin.com/in/erikkonner/">
          <img src={linkedInIcon} alt="LinkedIn Icon"/>
        </a>
        <a href={resume}>
          <img src={resumeIcon} alt="Resume"/>
        </a>
        <a href="mailto:erikkonner@gmail.com">
          <img src={emailIcon} alt="Email"/>
        </a>
      </section>
    </footer>
  );
}

export default Footer;