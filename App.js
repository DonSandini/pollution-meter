/**
 * Created by Sasho on 25/11/2015.
 */
/**
 * Created by Sasho on 01/12/2015.
 */
import React from 'react';
import Filter from './app/views/filter';
import LoginOut from './app/views/loginout';
import Constants from './constants';

require("./public/stylesheets/app.less");

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






