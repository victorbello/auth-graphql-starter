import React from 'react';
import { graphql } from 'react-apollo';

import query from '../queries/CurrentUser';

type Props = {
  user: Object,
  isFetching: boolean
}

class Header extends React.Component {
  props: Props;

  render() {
    if(this.props.isFetching) { return <h3>Loading...</h3> }
    return (
      <div>
        Header
      </div>
    );
  }
}

const mapDataToProps = result => ({
  user: result.data.user,
  isFetching: result.data.loading
});

const withData = graphql(query, {
  props: mapDataToProps
});

export default withData(Header);
