import React from 'react';

const Portfolio = () => {
    return (
      <section>
        <h2>My Portfolio</h2>
        <article>
          <img src={require("../../assets/images/CoderDojo.png")} alt="Splash Page for CoderDojo Website"/>
          <img src={require("../../assets/images/TrapperKeeper.png")} alt="Splash Page for TrapperKeeper"/>


        </article>
  
      </section>
    )
}

export default Portfolio;