import React from 'react';
import EkProfile from '../../images/Ek-Profile.jpg';


export const Splash = () => {
  return (
    <main>
      <section >
        <img src={EkProfile} alt="Profile of Erik Konner" />
      </section>
      <section className="bio">
        <h3>Erik Konner</h3>
        <p>Front End Developer || Former Client Service Associate</p>
        <p>Denver, CO</p>
      </section>
    </main>
  )
}

export default Splash;