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
        <div>
          <li>
            <Link to='/signup'>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo left'>
            Home
          </Link>
          <ul className='right'>
            {this.renderButtons()}
          </ul>
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
