/**
 * Created by Sasho on 25/11/2015.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Constants from './constants';

require("./stylesheets/app.less");

var ConstantsStore = Constants;

var App = React.createClass({
    getInitialState() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount() {
        function createCORSRequest(method, url){
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr){
                xhr.open(method, url, true);
            } else if (typeof XDomainRequest != "undefined"){
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                xhr = null;
            }
            return xhr;
        }

        /*var request = createCORSRequest("get", this.props.source);
        if (request){
            request.onload = function(response){
                //do something with request.responseText
                let test = JSON.parse(response.currentTarget.responseText);
                debugger;
                //TODO emit an event and handle response there!
            };
            request.send();
        }*/
    },

    render() {


                //{this.state.username}'s last gist is
                //<a href={this.state.lastGistUrl}>here</a>.
        return (
            <div className="pollution-filter">
                <h1>{ Constants.MESSAGE_WELCOME }</h1>
                <form id="filter" action="">
                    <input className="input-text" type="text" placeholder="Please type a location"/>
                    <input className="input-submit" type="submit"/>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<App source={ ConstantsStore.API_URL_BREEZOMETER } />, document.getElementById('app'));
export default App