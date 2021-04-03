import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';
const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.content}>{children}</div>
  </section>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
