import React from 'react';

const Portfolio = () => {
    return (
      <main>
        <h2>My Portfolio</h2>
        <section className="portfolio-container">
          <article>
            <img src={require("../../assets/images/CoderDojo.png")} alt="Splash Page for CoderDojo Website"/>
          </article>
          <article>
            <img src={require("../../assets/images/TrapperKeeper.png")} alt="Splash Page for TrapperKeeper"/>
          </article>
        </section>
  
      </main>
    )
}

export default Portfolio;