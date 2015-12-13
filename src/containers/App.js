import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import Header from '../components/Header';

const ROOM_LIST = [
  'redux-test-1',
  'redux-test-2',
  'redux-test-3',
  'redux-test-4',
  'redux-test-5'
];

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  render() {
    return (
      <div>
        <p>Connected: {this.props.client.connected}</p>
        <ul>
          {ROOM_LIST.map((room) => (
            <li>
              {this.props.rooms[`${room}@talky.io`] ?
                (<strong><Link to={`/${room}`}>{room}</Link></strong>) :
                (<Link to={`/${room}`}>{room}</Link>)
              }
            </li>
          ))}
        </ul>
        <div>
          {this.props.client.connected && this.props.children}
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    client: state.xmpp.client,
    rooms: state.xmpp.mucs.mucs
  };
}

export default connect(mapStateToProps)(App);
