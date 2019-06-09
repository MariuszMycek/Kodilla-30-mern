import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// import styles
import styles from './Navigation.css';

const Navigation = (props) => {
  return (
    <div className={styles['nav-links']}>
      <ul>
        <Link to="/">
          <li>{props.intl.navbar.home}</li>
        </Link>
        <Link to="/about">
          <li>{props.intl.navbar.about}</li>
        </Link>
        <Link to="/posts">
          <li>{props.intl.navbar.posts}</li>
        </Link>
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default Navigation;
