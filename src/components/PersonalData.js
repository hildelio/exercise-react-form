import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalData extends Component {
  render() {
    const { name, email, CPF, maxLength, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            name="name"
            type="text"
            maxLength={ maxLength }
            style={ { textTransform: 'uppercase' } }
            value={ name.toUpperCase() }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            maxLength={ maxLength }
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="CPF">
          CPF
          <input
            id="CPF"
            name="CPF"
            type="text"
            maxLength={ maxLength }
            value={ CPF }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

PersonalData.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  CPF: PropTypes.number,
  maxLength: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default PersonalData;
