var React = require('react');
var ContactStore = require('../stores/ContactStore');
var FluxAddContact = require('./FluxAddContact.react');
var FluxContactList = require('./FluxContactList.react');

// Method to retrieve state from Stores
function getContactState() {
  return {
    contacts: ContactStore.getContacts(),
    contact: ContactStore.getContact(),
    addContactVisible : ContactStore.getAddContactVisible()
  };
}

// Define main Controller View
var FluxContactApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getContactState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    ContactStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    ContactStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div className="flux-contact-app">
        <FluxAddContact  visible={this.state.addContactVisible} />
        <FluxContactList contacts={this.state.contacts} />
      </div>
  	);
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getContactState());
  }

});

module.exports = FluxContactApp;