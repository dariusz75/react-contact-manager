import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }
  render() {
    return (
      <div className="card card-body mb-3">
        <h4>{this.props.name} <i className="fas fa-sort-down" onClick={this.onShowClick}></i></h4>
        {this.state.showContactInfo ? (<ul className="list-group">
          <li className="list-group-item">{this.props.email}</li>
          <li className="list-group-item">{this.props.phone}</li>
        </ul>) : null}
      </div>
    )
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default Contact;