import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.scss'

class Home extends Component {

  render() {
    return (
      <div>welcome to home page</div>
    );
  }
}

export default connect(state => ({
  formData: state.formData,
  proData: state.proData,
}), {
})(Home);