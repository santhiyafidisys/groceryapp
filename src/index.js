import React from 'react';
import ReactDOM from 'react-dom';
import LoginFrom from './Loginpage';
class LoginPage extends React.Component {
  render() {
      return (
        <LoginFrom image="theme-illustration.png"/>
      )
  }
}
ReactDOM.render(<LoginPage />,document.getElementById('root'));
