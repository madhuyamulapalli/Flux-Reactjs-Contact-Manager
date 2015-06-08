var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxContactConstants = require('../constants/FluxContactConstants');
var _ = require('underscore');

// Define initial data points
var _contacts = {}, _contact = null, _addContactVisible = false;

// Method to load contact info data from mock API
function loadContactInfoData(data) {
  _contacts = data.contacts;
}

function setAddContactVisible(visible) {
  _addContactVisible = visible;
}

function addContactInfo(data) {
  var id = _contacts.length ?  (_contacts[_contacts.length-1].id + 1) : 1;
  var contact = {};
  contact.id = id;
  contact.name = data.name;
  contact.tel = data.tel;
  contact.email = data.email;
  contact.avatar = _.random(1, 15) + '.jpg'
  _contacts.push(contact);
}

function deleteContactInfo(data) {
  for(c in _contacts) {
    if(_contacts[c].id === data.id) {
       _contacts.splice(c,1);
       break;
    }
  }
}

function editContactInfo(data) {
    for(c in _contacts) {
    if(_contacts[c].id === data.id) {
       _contacts[c] = data;
       break;
    }
  }
}

var ContactStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getContacts: function() {
    return _contacts;
  },

  getContact: function() {
    return _contact;
  },

  getContactsTotal : function() {
    return Object.keys(_contacts).length;  
  },

  getAddContactVisible: function() {
    return _addContactVisible;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case FluxContactConstants.RECEIVE_DATA:
      loadContactInfoData(action.data);
      break;

    // Toggle AddContact Panel  
    case FluxContactConstants.ADD_CONTACT_VISIBLE:
      setAddContactVisible(action.visible);
      break;

    //Add Contact
    case FluxContactConstants.ADD_CONTACT:
      addContactInfo(action.data);
      break;
    
    //Delete Contact
    case FluxContactConstants.DELETE_CONTACT:
      deleteContactInfo(action.data);
      break;    

    //Edit Contact
    case FluxContactConstants.EDIT_CONTACT:
      editContactInfo(action.data);
      break;  

    default:
      return true;
  }

  // If action was responded to, emit change event
  ContactStore.emitChange();

  return true;

});

module.exports = ContactStore;
