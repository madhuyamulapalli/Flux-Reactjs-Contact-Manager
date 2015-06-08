var React = require('react');
var FluxContactActions = require('../actions/FluxContactActions');
var $ = require('jquery');


var FluxContactCard = React.createClass({

	removeContact: function(contact, event) {
		FluxContactActions.deleteContact(contact);
	},

	showEditCard: function(contact, event) {
		this.setFormToDefault(contact);
		this.rotateCard(contact, event);
	},

	rotateCard: function(contact, event) {
        var $card = $(event.target).closest('.card-container');

        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }

        if(event.target.innerText == 'Cancel') {
        	this.setFormToDefault(contact);
        }
	},

	setFormToDefault : function(contact) {
            React.findDOMNode(this.refs.name).value = contact.name;
	        React.findDOMNode(this.refs.tel).value = contact.tel;
	        React.findDOMNode(this.refs.email).value = contact.email;		
	},

	editContact: function(data, event) {
	    var contact = {
	      id: data.id,
	      avatar: data.avatar,
	      name: React.findDOMNode(this.refs.name).value.trim(),
	      tel: React.findDOMNode(this.refs.tel).value.trim(),
	      email: React.findDOMNode(this.refs.email).value.trim()
	    };
	    FluxContactActions.editContact(contact);
	    this.rotateCard(data, event);
	},

	render: function() {
    	var self = this, contact = this.props.contact;

    	return(

    	<div className="col-md-4 col-sm-6">
            <div className="card-container manual-flip">
                <div className="card">
                    <div className="front">
                        <div className="cover">
                            <img src="img/card_thumb.jpg"/>
                        </div>
                        <div className="user">
                            <img className="img-circle" src={"img/faces/"+contact.avatar}/>
                        </div>
                        <div className="content">
                            <div className="main">
                                <h3 className="name">{contact.name}</h3>
                                <h5><i className="glyphicon glyphicon-envelope"></i> {contact.email}</h5>
                                <h5><i className="glyphicon glyphicon-earphone"></i> {contact.tel}</h5>
                            </div>
                            <div className="footer">
                            	<div className="form-group">
 					                <div className="col-sm-offset-2 col-xs-4">
					                  <button type="button" className="btn btn-outline btn-sm btn-block" onClick={self.removeContact.bind(self, contact)}>Delete</button>
					                </div>                           	
					                <div className="col-xs-4">
					                  <button type="button" className="btn btn-outline btn-sm btn-block" onClick={self.showEditCard.bind(self, contact)}>Edit</button>
					                </div>
				              </div>                              
                            </div>
                        </div>
                    </div> 
                    <div className="back">
                        <div className="header">
                            <h3 className="title text-center">Edit Contact</h3>
                        </div> 
                        <form role="form" className="form-vertical contract-form">
                        <div className="content">

                            <div className="main">
					              <div className="form-group col-sm-10 col-sm-offset-1">
					                  <label className="control-label">Full name:</label>
					                  <input type="text" className="form-control"  ref="name"  />
					              </div>
					              <div className="form-group col-sm-10 col-sm-offset-1">
					                <label className="control-label">Email address:</label>					              
					                <input type="email" className="form-control" ref="email"  />
					              </div>
					              <div className="form-group col-sm-10 col-sm-offset-1">
					                <label className="control-label">Telephone number:</label>
					                  <input type="tel" className="form-control" ref="tel"   />
					              </div>
                            </div>
                        </div>
                        <div className="footer">
				              <div className="form-group">
				                <div className="col-sm-offset-2 col-xs-4">
				                  <button type="button" className="btn btn-outline btn-sm btn-block" onClick={self.editContact.bind(self, contact)}>Submit</button>
				                </div>
				                <div className="col-xs-4">
				                  <button type="button" className="btn btn-outline btn-sm btn-block" onClick={self.rotateCard.bind(self, contact)}>Cancel</button>
				                </div>
				              </div>
                        </div>
                        </form>
                    </div>                    
                </div> 
            </div> 
        </div> 

  	);
  }
});

module.exports = FluxContactCard;