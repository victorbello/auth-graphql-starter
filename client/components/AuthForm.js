import React from 'react';

class AuthForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className='row'>
        <form className='col s6'>
          <div onSubmit={this.onSubmit} className='input-field'>
            <input
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>
          <div className='input-field'>
            <input
              name='password'
              placeholder='Password'
              type='password'
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
