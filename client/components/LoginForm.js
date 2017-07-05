import React from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login';

class LoginForm extends React.Component {
  onSubmit = ({email, password}) => {
    console.log(email, password);
    this.props.onLogin(email, password);
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapActionsToProps = ({ mutate }) => ({
  onLogin: (email, password) => mutate ({
    variables: { email, password }
  })
});

const withActions = graphql(mutation, {
  props: mapActionsToProps
});

export default withActions(LoginForm);
