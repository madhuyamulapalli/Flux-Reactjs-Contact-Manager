var React = require('react');
var ContactInfoData = require('./ContactInfoData');
var ContactsApi = require('./utils/ContactsApi')
var FluxContactApp = require('./components/FluxContactApp.react');

// Load Mock Contact Info Data into localStorage
ContactInfoData.init();

// Load Mock API Call
ContactsApi.getContactInfoData();

// Render FluxContactApp Controller View
React.render(
  <FluxContactApp />,
  document.getElementById('flux-contacts')
);