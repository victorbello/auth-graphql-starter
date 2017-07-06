import React from 'react';
import { graphql, compose } from 'react-apollo';
import { hashHistory } from 'react-router';

import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';

class SignupForm extends React.Component {
  state = {
    errors: []
  };

  componentWillUpdate = (nextProps) => {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

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

const withData = graphql(query);

const mapActionsToProps = ({ mutate }) => ({
  onLogin: (email, password) => mutate ({
    variables: { email, password },
    refetchQueries: [{ query }]
  })
});

const withActions = graphql(mutation, {
  props: mapActionsToProps
});

export default compose(
  withData,
  withActions
)(SignupForm);
