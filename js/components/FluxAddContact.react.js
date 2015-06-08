var React = require('react');
var FluxContactActions = require('../actions/FluxContactActions');


var FluxAddContact = React.createClass({

  openAddContact: function() {
    React.findDOMNode(this.refs.name).value = "";
    React.findDOMNode(this.refs.tel).value = "";
    React.findDOMNode(this.refs.email).value = "";
    FluxContactActions.updateAddContactVisible(true);
  },

  closeAddContact: function() {
    FluxContactActions.updateAddContactVisible(false);
  },

  addContact: function() {
    var contact = {
      name: React.findDOMNode(this.refs.name).value.trim(),
      tel: React.findDOMNode(this.refs.tel).value.trim(),
      email: React.findDOMNode(this.refs.email).value.trim()
    };
    FluxContactActions.addContact(contact);
    FluxContactActions.updateAddContactVisible(false);
  },
  // Render our child components, passing state via props
  render: function() {
    var self = this;
  	return (
      <div className="flux-add-contact">
        <div className={"row " + (this.props.visible ? 'hide' : '')}>
          <div className="col-sm-12">
            <p className="text-center">
              <a className="btn btn-lg btn-outline" onClick={self.openAddContact}>Add Contact</a>
            </p>
          </div>
        </div>
        <div className={"row addContact " + (this.props.visible ? '' : 'hide')}>
            <h2 className="page-header text-center title">Add Contact</h2>
            <form role="form" className="form-horizontal contract-form">
              <div className="form-group">
                <label className="col-sm-4 control-label">Full name:</label>
                <div className="col-sm-4">
                  <input type="text" className="form-control"  ref="name"  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label">Email address:</label>
                <div className="col-sm-4">
                  <input type="email" className="form-control" ref="email"  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label">Telephone number:</label>
                <div className="col-sm-4">
                  <input type="tel" className="form-control" ref="tel"   />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-4 col-sm-2">
                  <button type="button" className="btn btn-outline btn-lg btn-block" onClick={self.closeAddContact}>Cancel</button>
                </div>              
                <div className="col-sm-2">
                  <button type="button" className="btn btn-outline btn-lg btn-block" onClick={self.addContact}>Submit</button>
                </div>
              </div>
            </form>
        </div>           
      </div>
  	);
  }
});

module.exports = FluxAddContact;