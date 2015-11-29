/**
 * Created by Sasho on 25/11/2015.
 */
import React from 'react';
import ReactDOM from 'react-dom';

require("./stylesheets/app.less");

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
        return (
            <div>
                <h1>Wellcome to Pollution Meter</h1>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
                <form id="pollution-filter" action="">
                    <input type="text"/>
                    <input type="submit"/>
                </form>
                
            </div>
        );
    }
});

ReactDOM.render(<App source="https://api.breezometer.com/baqi/?location=5th+avenue+new+york+ny+united+states&key=7d47bdacd8f147f8bee081b7f3728fa9" />, document.getElementById('app'));

export default App