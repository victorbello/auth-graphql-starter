import React from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends React.Component {
  onSubmit = ({email, password}) => {
    this.props.onLogin(email, password)
      .catch(res => {
        debugger;
      });
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
    variables: { email, password },
    refetchQueries: [{ query }]
  })
});

const withActions = graphql(mutation, {
  props: mapActionsToProps
});

export default withActions(LoginForm);
