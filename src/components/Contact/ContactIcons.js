import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link} aria-label={s.label} target="_blank" rel="noreferrer">
          {/* <FontAwesomeIcon icon={s.icon} /><span style={{ marginLeft: 10 }}>{s.value}</span> */}
          <FontAwesomeIcon size="lg" icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
