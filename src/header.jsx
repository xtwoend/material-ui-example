var React = require('react');
var AppBar = require('material-ui').AppBar;
var LeftNav = require('material-ui').LeftNav;
var MenuItem = require('material-ui').MenuItem;
var IconButton = require('material-ui').IconButton;
var Styles  = require('material-ui').Styles;
var { Colors, Spacing, Typography } = Styles;

var Colors = require('material-ui/lib/styles/colors');

var Header = React.createClass({
    
    contextTypes: {
        router: React.PropTypes.func,
    },

    _onLeftIconButtonTouchTap: function() {
        this.refs.leftNav.toggle();
    },

    _onLeftNavChange: function(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    },

    _onHeaderClick: function(){
        this.context.router.transitionTo('home');
        this.refs.leftNav.close();
    }, 

    getStyles: function() {
        var darkWhite = Colors.darkWhite;
        return {
            footer: {
                backgroundColor: Colors.grey900,
                textAlign: 'center'
            },
            a: {
                color: darkWhite
            },
            p: {
                margin: '0 auto',
                padding: '0',
                color: Colors.lightWhite,
                maxWidth: '335px'
            },
            iconButton: {
                color: darkWhite
            }
        };
    },
    getHederStyles: function() {
        return {
            cursor: 'pointer',
            //.mui-font-style-headline
            fontSize: '24px',
            color: Typography.textFullWhite,
            lineHeight: Spacing.desktopKeylineIncrement + 'px',
            fontWeight: Typography.fontWeightLight,
            backgroundColor: Colors.cyan500,
            paddingLeft: Spacing.desktopGutter,
            paddingTop: '0px',
            marginBottom: '8px'
        };
    },

    render: function() {
        var menuItems = [
            { route: 'home', text: 'Home' },
            { type: MenuItem.Types.SUBHEADER, text: 'Matrial UI Component' },
            { route: 'button', text: 'Button' },
            { route: 'date-picker', text: 'Date Picker' },
            { type: MenuItem.Types.SUBHEADER, text: 'About this app' },
            { route: 'about', text: 'About Material UI' },
            { 
                type: MenuItem.Types.LINK, 
                payload: 'http://material-ui.com/', 
                text: 'Matrial UI'
            }
        ];
        var styles = this.getStyles();

        var githubButton = (
            <IconButton
                iconStyle={styles.iconButton}
                iconClassName="fa fa-github"
                href="https://github.com/xtwoend/material-ui-example"
                linkButton={true} />
        );


        var header = (
          <div style={this.getHederStyles()} onTouchTap={this._onHeaderClick}>
            material ui
          </div>
        );

        return (
            <div className="nav">
                <AppBar 
                    title='Matrial UI' 
                    onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap} 
                    zDepth={0} 
                    iconElementRight={githubButton} />

                <LeftNav 
                    ref="leftNav" 
                    header={header} 
                    docked={false} 
                    menuItems={menuItems} 
                    onChange={this._onLeftNavChange} />
            </div>
        );
    }
});

module.exports = Header;