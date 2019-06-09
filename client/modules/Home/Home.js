import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.header}>Welcome to my starter blog!</h2>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {};
// };

// const mapDispatchToProps = dispatch => {
//   return {};
// };

// Home.propTypes = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);

export default Home;
