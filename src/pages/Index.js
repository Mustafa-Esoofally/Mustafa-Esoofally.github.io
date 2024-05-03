import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Mustafa Esoofally's personal website. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h3><Link to="/">Hello there!</Link></h3>
          <span style={{ display: 'inline-block' }}>
            I&apos;m Mustafa, currently an AI/ML Research Assistant at
            Florida International University. I specialize in advanced
            machine learning, data mining, and software engineering.
            I am passionate about developing technologies that
            enhance the quality of life. My ultimate goal is to
            make everyday technologies and environments more inclusive.
          </span>
          {/* <br />
          <br />
          <span> Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>. {' '}
            <Link to="/projects">projects</Link>, {' '}
            view <Link to="/stats">site statistics</Link>, {' '}
          </span> */}
        </div>
      </header>
      <h3>Highlights</h3>
      <ul style={{ listStyleType: 'square' }}>
        <li><strong>Advanced Predictive Modeling</strong>: Led a pioneering project
          at the Energy Systems Research Lab to enhance the accuracy
          of battery charge estimations using advanced
          AI techniques, achieving an 8% improvement.
        </li>
        <li><strong>Healthcare Innovation</strong>: Developed innovative diagnostic tools for brain
          cancer using PathCNN and AutoKeras, significantly
          enhancing diagnostic precision by up to 15%.
        </li>
        <li><strong>Leadership in Software Engineering</strong>: Oversaw a team at Team Pumpkin,
          directing the development of complex reporting systems and content management algorithms
          that elevated user engagement by 20% and reduced reporting time significantly.
        </li>
        <li><strong>Expertise in AI Technologies</strong>: Proficient in
          state-of-the-art AI methodologies
          including Autoencoders, GANs, LSTM, and Neural Networks,
          using frameworks like Keras and TensorFlow.
        </li>
        <li><strong>Advocacy for Accessibility Technologies</strong>: Committed
          to designing and implementing
          accessible interfaces and rehabilitation technologies
          that enhance the quality of life for
          individuals with physical impairments.
        </li>
        <li>
          <Link to="https://www.mdpi.com/2701152" target="_blank" rel="noopener noreferrer">
            <strong>Research and Publications</strong>: Contributed to the
            field with published research on data-driven
            models for State-of-Charge estimation in
            Lithium-Ion batteries, featured in the
            2024 issue of Batteries journal.
          </Link>
        </li>
        <li><strong>Programming and Software Development</strong>: Highly
          skilled in a diverse range of programming languages, including Python,
          JavaScript, and C#, with comprehensive experience
          in UI/UX design and API integration.
        </li>
        <li><strong>Innovative Personal Projects</strong>: Developed
          a suite of AI-powered tools, including an
          automated resume customization tool, an
          interactive PDF chat application, and a blog
          content enhancer to streamline digital content creation.\
        </li>
      </ul>

    </article>
  </Main>
);

export default Index;
