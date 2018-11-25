/**
*
* UserWeightSimpleForm
*
*/

import React from 'react';

import styles from './styles.css';

class UserWeightSimpleForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // vs .bind in constructor
  handleUserWeightSubmitted = (e) => {
    e.preventDefault();
    const userWeight = this.userWeightField.value;
    console.log('userWeight', userWeight);
  }
  render() {
    return (
      <div className={styles.userWeightSimpleForm}>
        <form>
          <input
            name="userWeight"
            placeholder="80"
            type="text"
            ref={(f) => { this.userWeightField = f; }}
          />
          <button onClick={this.handleUserWeightSubmitted}>Toevoegen</button>
        </form>
      </div>
    );
  }
}

export default UserWeightSimpleForm;
