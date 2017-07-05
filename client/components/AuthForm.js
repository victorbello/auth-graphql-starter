import React from 'react';

class AuthForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <div className='row'>
        <form className='col s6'>
          <div className='input-field'>
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>
          <div className='input-field'>
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})}
            />
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
