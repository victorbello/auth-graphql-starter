import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

type Props = {
  user: Object,
  isFetching: boolean
}

class Header extends React.Component {
  props: Props;

  onLogoutClick = () => {
    this.props.onLogout();
  }

  renderButtons() {
    const { user, isFetching } = this.props;

    if(isFetching) { return <div />; }

    if(user) {
      return (
        <li>
          <a onClick={this.onLogoutClick}>Logout</a>
        </li>
      );
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

const mapActionsToProps = ({ mutate }) => ({
  onLogout: () => mutate({
    refetchQueries: [{query}]
  })
});

const withActions = graphql(mutation, {
  props: mapActionsToProps
});

export default compose(
  withData,
  withActions
)(Header);
