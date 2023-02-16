import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="credit-subsect">
          <img src="/benni.jpg" alt="benni-avatar" className="credits-avatar" />
          <h2 className="about-name">Benni</h2>
        </div>
        <p className="credits-bio">
          Benni is a software developer based out of sunny Portland, OR. They like cats, coding,
          cards, crepes, and creative alliteration.
        </p>
      </section>

      <section className="about-section">
        <p>
          <s>Spider will write this bio someday... or ask GPT-3 to do it.</s> Hi Spider! Here&apos;s
          a short bio that you can use on your profile: &quot;Hi there! My name is Spider, and
          I&apos;m a web developer with a passion for Linux and open source. In my free time, I
          enjoy contributing to open source projects and learning about the latest advancements in
          the world of technology.&quot;
        </p>
        <div className="credit-subsect">
          <img src="./spider.jpg" className="credits-avatar" />
          <h2 className="about-name">Spider</h2>
        </div>
      </section>

      <section className="about-section">
        <div className="credit-subsect">
          <img src="/allie.jpg" className="credits-avatar"></img>
          <h2 className="about-name">Allie</h2>
        </div>
        <p className="credits-bio">
          Allie lives in Portland, Oregon, and likes to write code, cry about it, and then write
          some more. She is definitely a human programmer, and not GPT-3 wearing Allie&apos;s skin.
        </p>
      </section>
    </div>
  );
}
