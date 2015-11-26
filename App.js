/**
 * Created by Sasho on 25/11/2015.
 */
import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    getInitialState() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount() {
        var newName = 'John Smith',
            xhr = new XMLHttpRequest();

        xhr.open('POST',
            encodeURI(this.props.source));
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200 && xhr.responseText !== newName) {
                debugger;
            }
            else if (xhr.status !== 200) {
                debugger;
            }
        };
        xhr.send(encodeURI('name=' + newName));

    },

    render() {
        return (
            <div>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
});

ReactDOM.render(<App source="https://api.github.com/users/octocat/gists" />, document.getElementById('app'));

export default App