import React from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';

class SignupForm extends React.Component {
  state = {
    errors: []
  };

  onSubmit = ({email, password}) => {
    this.props.onLogin(email, password)
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm
          onSubmit={this.onSubmit}
          errors={this.state.errors}
        />
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

export default withActions(SignupForm);
