/**
 * Created by Sasho on 25/11/2015.
 */
/**
 * Created by Sasho on 01/12/2015.
 */
import React from 'react';
import Filter from './app/views/filter.js';
import LoginOut from './app/views/loginout.js';
import Constants from './constants.js';

class App extends React.Component {
    defineStateProperty () {
        return {};
    }
    render() {
        return (
            <div>
                <LoginOut />
                <Filter />
            </div>
        )
    }
}

export default App;






