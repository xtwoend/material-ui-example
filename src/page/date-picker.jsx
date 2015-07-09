var React = require('react');
var DatePicker = require('material-ui/lib/date-picker/date-picker');
var TimePicker = require('material-ui/lib/time-picker/time-picker');
var Router = require('react-router');

var DatePickerPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },

 
  render: function() {
    return (
      <div className="padding">
        <h1>
          Home Page
        </h1>

        <p>
          <DatePicker
            hintText="Date Picker" />

            <TimePicker
            format="24hr"
            hintText="Time Picker" />
        </p>
        
       
      </div>
    );
  }
});

module.exports = DatePickerPage;