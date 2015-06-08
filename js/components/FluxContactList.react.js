var React = require('react');
var FluxContactActions = require('../actions/FluxContactActions');
var FluxContactCard = require('./FluxContactCard.react');

var FluxContactList = React.createClass({


  // Render our child components, passing state via props
  render: function() {
    var self = this, contacts = this.props.contacts;
  	return (
      <div className="flux-contact-list">

        <div className="container">
            <div className="row">
                <h2 className="page-header text-center title">
                    List of Contacts ({contacts.length})
                </h2>
                <div className="col-sm-12">
                    
                        {contacts.map(function(contact){
                          return (
                                <FluxContactCard contact={contact} />
                          )
                        })}

                </div>
            </div>
        </div>
      </div>
  	);
  }
});

module.exports = FluxContactList;