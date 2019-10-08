import React from 'react';
import splashPic from '../../assets/images/Singularity_HQ.jpg';


export const Splash = () => {
  return (
    <main>
      <section className="bio">
        <h2>Erik Konner</h2>
        <h3>Front End  Software Engineer  | Former Client Service Associate</h3>
        <p>Denver, CO</p>
      <img src={splashPic} alt="SplashPage Pic"/>
      </section>
    </main>
  )
}

export default Splash;