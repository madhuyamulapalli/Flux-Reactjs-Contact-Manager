var FluxContactActions = require('../actions/FluxContactActions');

module.exports = {

  // Load mock Contact info data from localStorage  via Action
  getContactInfoData: function() {
    var data = JSON.parse(localStorage.getItem('contacts'));
    FluxContactActions.receiveContacts(data);
  }

};