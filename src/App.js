import React from 'react';
import PersonalData from './components/PersonalData';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    CPF: '',
    maxLength: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event);
    this.setState({
      [name]: value,
    }, () => {
      if (name === 'name') {
        this.setState({
          maxLength: 40,
        });
      }
      if (name === 'email') {
        this.setState({
          maxLength: 50,
        });
      }
      if (name === 'CPF') {
        this.setState({
          maxLength: 11,
        });
      }
    });
  };

  render() {
    const { name, email, CPF, maxLength } = this.state;
    return (
      <form>
        <h1>React Form</h1>
        <PersonalData
          name={ name }
          email={ email }
          CPF={ CPF }
          maxLength={ maxLength }
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default App;
