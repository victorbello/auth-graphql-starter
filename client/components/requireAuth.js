import React from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import currentUser from '../queries/CurrentUser';

export default (WrappedComponent) => {
  class RequireAuth extends React.Component {
    componentWillUpdate(nextProps) {
      if(!nextProps.data.user && !nextProps.data.loading) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const withData = graphql(currentUser);

  return withData(RequireAuth);
}
