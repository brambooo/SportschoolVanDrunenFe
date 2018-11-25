/*
 *
 * UserWeightContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectUserWeightContainer from './selectors';
import styles from './styles.css';
import UserWeightSimpleForm from './../../components/UserWeightSimpleForm/index';
import { getUserWeights, getUserWeightsSucceeded } from './actions';

/**
 * UserWeightContainer
 * Is currently created with a form that isn't using the redux-form module.
 * This decision is made, because I like to create a form and couple it to redux myself.
 */
export class UserWeightContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    // handleRegisterUserWeight: React.PropTypes.func.isRequired,
    getUserWeights: React.PropTypes.func.isRequired,
    // userWeights: React.PropTypes.arrayOf(
    //   React.PropTypes.shape({
    //     weight: React.PropTypes.string.isRequired,
    //     registered: React.PropTypes.date.isRequired,
    //   })
    // ),
  }

  componentWillMount() {
    console.log('componentWillMount');
    const userId = 10;
    this.props.getUserWeights(userId);
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log('mapStateToProps', this.mapStateToProps);
  }

  handleRegisterUserWeight = (value) => {
    console.log('handleRegisterUserWeight', value);
  }

  render() {
    console.log(this.props);
    const userWeights = this.props.userWeights;

    return (
      <div className={styles.userWeightContainer}>
        <div>
          <h3>Gewichtmeting</h3>
          <p>Gewicht van vandaag invoeren:</p>

          <UserWeightSimpleForm />



          <div className="registered-weights-overview">
            <h3>Andere metingen</h3>
            <p>...</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectUserWeightContainer();

function mapDispatchToProps(dispatch) {
  return {
    getUserWeights: (userId) => dispatch(getUserWeights(userId)),
    // handleRegisterUserWeight: () => dispatch(this.handleRegisterUserWeight()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserWeightContainer);
