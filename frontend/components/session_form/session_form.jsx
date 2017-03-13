import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
              .fail(this.setState({username: "", password: ""}));
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  clearErrors() {
    
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((err, i) => (
          <li key={`error-${i}`}>{err}</li>
        ))}
      </ul>
    );
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>Sign Up</Link>;
    } else {
      return <Link to='/login'>Log In</Link>;
    }
  }

  render () {
    const formTitle = (this.props.formType === 'login' ? 'Log in' : 'Sign up');


    return (
      <div>
        <h3 className="session-form-header">{formTitle}</h3>
        <form className="session-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label>
            Username:
            <input type="text"
                  value={this.state.username}
                  className="username-input"
                  onChange={this.update("username")}/>
          </label>
          <br/>
          <label>
            Password:
            <input type="password"
                  value={this.state.password}
                  className="password-input"
                  onChange={this.update("password")}/>
          </label>
          <br/>
          <input type="submit" value={formTitle} />
        </form>
        {this.navLink()}
      </div>
    );
  }
}

export default SessionForm;
