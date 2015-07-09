var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');
var Router = require('react-router');

var About = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

  handleTransition: function() {
    this.context.router.transitionTo('home');
  },
  
  render: function() {
    return (
      <div className="padding">
        <h1>
          About this app
        </h1>

        <p>

        </p>
        
        <RaisedButton label="back to home" onClick={this.handleTransition} />
      </div>
    );
  }
});

module.exports = About;