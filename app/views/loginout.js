/**
 * Created by Sasho on 01/12/2015.
 */
'use strict'

var React = require('react');
var googleApiLoader = require('../services/GoogleAPILoader');


module.exports = React.createClass({

    getInitialState () {
        return {};
    },
    componentDidMount () {
        var _this = this;

        googleApiLoader.authLoaded(function () {
            _this.setState({authLoaded: true});

            googleApiLoader.getAuth2().currentUser.listen(function (user) {
                _this.setState({finishedLoading: true});
                if (user.getBasicProfile()) {
                    var profile = user.getBasicProfile();
                    var profileProxy = {};
                    profileProxy.id = profile.getId();
                    profileProxy.name = profile.getName();
                    profileProxy.thumb = profile.getImageUrl();
                    profileProxy.email = profile.getEmail();
                    _this.setState({loggedInUser: profileProxy});
                }
                _this.setState({isLoggedIn: user.getBasicProfile() ? true : false});
            });
        });

        googleApiLoader.clientsLoaded(function () {
            _this.setState({clientsLoaded: true});
        });
    },
    toggleSignIn () {
        if (!googleApiLoader.getAuth2().isSignedIn.get())
            googleApiLoader.signIn();
    },
    toggleSignOut () {
        var _this = this;
        if (googleApiLoader.getAuth2().isSignedIn.get())
            googleApiLoader.signOut();
    },
    render () {

        var _this = this;

        var loggedInUserThumb = null;

        if (this.state.loggedInUser)
            loggedInUserThumb = <img src={this.state.loggedInUser.thumb} />

        var toggleLoginButton = <button onClick={this.toggleSignIn}>Login to Google</button>;
        var toggleLogOutButton = <button onClick={this.toggleSignOut}>Logout</button>;
        if (this.state.finishedLoading) {

            if (this.state.isLoggedIn) {

                return (
                    <div>
                        {loggedInUserThumb}
                        {this.state.loggedInUser.name}
                        <hr />
                        You're now free to use the Google APIs!
                        <br/>
                        { toggleLogOutButton}
                    </div>
                )
            }
            else
                return toggleLoginButton;
        }
        else {
            return <div>Loading...</div>
        }
    }
});
