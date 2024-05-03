import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/mustafa cruise.jpg`} alt="" />
      </Link>
      <header>
        <h3>Mustafa Esoofally</h3>
        {/* <p><a href="mailto:mustafa.z.esoofally@gmail.com">
        mustafa.z.esoofally@gmail.com</a></p> */}
        <p>Florida International University Miami, FL</p>
      </header>
    </section>

    {/* <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mustafa. I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni,
        and the VP of Engineering at <a href="https://smileidentity.com">Smile Identity</a>. Previously,
        I was the co-founder and CTO of <a href="https://arthena.com">Arthena</a>
        , co-founder of <a href="https://matroid.com">Matroid</a>, and worked at
        {' '}<a href="https://planet.com">Planet</a> and <a href="https://facebook.com">Facebook</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">
          Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section> */}

    <section className="blurb">
      <h3>Skills</h3>
      <li>
        <span>LLM Finetuning</span>
      </li>
      <li>
        <span>Deep Learning</span>
      </li>
      <li>
        <span>Data Analysis</span>
      </li>
      <li>
        <span>Full-stack</span>
      </li>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
