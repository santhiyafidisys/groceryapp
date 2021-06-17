import React from 'react';
import styles from './Food.module.css';
import Homepage from './Homepage';

class LoginFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', password: ''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  btnClick() {
    window.open("Homepage.js");
}
  handleChangeEmail(event) {
    this.setState({value: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  handleClick(event) {
    console.log('button click' + this.state);
    event.preventDefault();
  }
    render() {
        return (
          <div className={styles.welcome}>
            <div>
              <img className={styles.image} src={this.props.image} alt=" "/>
                <div className={styles.login}>
                  <h3 className={styles.greeting}>Welcome to grocery online shopping</h3>
                    <div className={styles.container}>
                      <form>
                        <h4>Enter your Email id</h4>
                          <input type="text" placeholder="Enter email id" value={this.state.value} onChange={this.handleChangeEmail}></input>
                        <h4>Enter your password</h4>
                          <input type="password" placeholder="Enter Password" name="psw" value={this.state.password} onChange={this.handleChangePassword} required></input>
                      </form>
                      <button  type="submit" onClick={this.btnClick.bind(this)}><a href="Homepage.js">login</a></button>
                    </div>
                  
                </div>
            </div>
          </div>
        )
    }
}
export default LoginFrom;

