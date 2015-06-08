var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxContactConstants = require('../constants/FluxContactConstants');

// Define action methods
var FluxContactActions = {

  // Receive inital Contacts Info data
  receiveContacts: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxContactConstants.RECEIVE_DATA,
      data: data
    })
  },

  //Toggle Add Contact panel
  updateAddContactVisible: function(visible) {
    AppDispatcher.handleAction({
      actionType: FluxContactConstants.ADD_CONTACT_VISIBLE,
      visible: visible
    })    
  },

  addContact: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxContactConstants.ADD_CONTACT,
      data: data
    })        
  },

  deleteContact: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxContactConstants.DELETE_CONTACT,
      data: data
    })       
  },

  editContact: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxContactConstants.EDIT_CONTACT,
      data: data
    })       
  }
};

module.exports = FluxContactActions;
