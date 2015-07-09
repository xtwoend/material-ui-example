var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

// material ui theme depedency and setting 
var injectTapEventPlugin = require("react-tap-event-plugin");
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');
var Header = require('./header');

var AboutPage = require('./page/about.jsx');
var HomePage = require('./page/home.jsx');
var ButtonPage = require('./page/button.jsx');
var DatePickerPage = require('./page/date-picker.jsx');

//load tap event plugin
injectTapEventPlugin();

var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount: function() {
    ThemeManager.setPalette({
      accent1Color: Colors.grey50,
    });
  },

  render: function() {
    return (
      <div className="app"> 
        <Header />
        
        <div className="page">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="app" handler={App} path="/">
    <Route name="home" path="/home" handler={HomePage}/>
    <Route name="about" path="/about" handler={AboutPage}/>
    <Route name="button" path="/button" handler={ButtonPage}/>
    <Route name="date-picker" path="/date-picker" handler={DatePickerPage}/>
    <DefaultRoute handler={HomePage} />
  </Route>
);

Router.run(routes, function(Handler, state) {
  React.render(<Handler />, document.body);
})