var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');
var Router = require('react-router');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

 
  render: function() {
    return (
      <div className="padding">
        <h1>
          Raised Button
        </h1>

        <p>
        <RaisedButton label="Button" />
        </p>
        
       
      </div>
    );
  }
});

module.exports = Home;