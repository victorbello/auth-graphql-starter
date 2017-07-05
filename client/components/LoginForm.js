import React from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm />
      </div>
    );
  }
}

const mapActionsToProps = ({ mutate }) => ({
  onLogin: (title) => mutate ({
    variables: {  },
    refetchQueries: [{  }]
  })
});

const withActions = graphql(mutation, {
  props: mapActionsToProps
});

export default withActions(LoginForm);
