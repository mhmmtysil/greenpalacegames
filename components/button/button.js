import React from 'react';
import styles from './button.module.scss';

const Button = ({ visible }) => {
  return <button className={`${styles.button} ${visible ? styles.visible : ''}`} />;
};

export default Button;