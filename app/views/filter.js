/**
 * Created by Sasho on 01/12/2015.
 */
/**
 * Created by Sasho on 25/11/2015.
 */
import React from 'react';

//var ConstantsStore = Constants;

var Filter = React.createClass({
    getInitialState() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount() {
    },

    render() {
        //{this.state.username}'s last gist is
        //<a href={this.state.lastGistUrl}>here</a>.
        //        <h1>{ Constants.MESSAGE_WELCOME }</h1>
        return (
            <div className="pollution-filter">
                <form id="filter" action="">
                    <input className="input-text" type="text" placeholder="Please type a location"/>
                    <input className="input-submit" onClick="" type="submit"/>
                </form>
            </div>
        );
    }
});

export default Filter;