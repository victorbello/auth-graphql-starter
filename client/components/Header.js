import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/CurrentUser';

type Props = {
  user: Object,
  isFetching: boolean
}

class Header extends React.Component {
  props: Props;

  renderButtons() {
    const { user, isFetching } = this.props;

    if(isFetching) { return <div />; }

    if(user) {
      return <div>Logout</div>;
    } else {
      return (
        <div>You're not signed in</div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          {this.renderButtons()}
        </div>
      </nav>
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
