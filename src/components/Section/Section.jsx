import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  const [fontWeight, setFontWeight] = useState(400);

  const handleTitle = () => {
    setFontWeight(fontWeight + 200);
  };

  return (
    <section className={css.section__container}>
      <h2 style={{ fontWeight }} onClick={handleTitle}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
