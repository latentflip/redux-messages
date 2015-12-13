import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let Component = React.createClass({
  render() {
    return (this.props.children);
  }
});

export default Component;
