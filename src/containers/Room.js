import React from 'react';
import { connect } from 'react-redux';

const Room = React.createClass({
  componentWillMount() {
    this.joinRoom(this.props.params.room);
  },

  componentWillReceiveProps(props) {
    if (props.params.room !== this.props.params.room) {
      this.joinRoom(props.params.room);
    }
  },

  joinRoom(room) {
    window.client.joinRoom(`${room}@talky.io`, localStorage.nick);
  },

  sendMessage(e) {
    e.preventDefault();
    window.client.sendMessage({
      to: `${this.props.params.room}@talky.io`,
      body: this.refs.msg.value,
      type: 'groupchat'
    });
    this.refs.msg.value = '';
  },

  render() {
    if (!this.props.room) {
      return (<p>Joining {this.props.params.room}</p>);
    }

    return (
      <div>
        <h1>{this.props.room.jid}</h1>
        <ul>
          {this.props.messages.map(({body}) => (
            <li>{body}</li>
          ))}
        </ul>
        <form onSubmit={this.sendMessage}>
          <input type='text' ref='msg' />
          <button type='submit'>send</button>
        </form>
      </div>
    );
  }
});

function mapStateToProps(state, props) {
  let room = state.xmpp.mucs.mucs[props.params.room + '@talky.io'];

  return {
    room,
    messages: (room && room.messages.map((id) => state.xmpp.messages.messages[id])) || []
  };
}

export default connect(mapStateToProps)(Room);
