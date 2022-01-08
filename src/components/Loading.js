import React, { Component } from 'react';
import loadingSpinner from './loadingSpinner.gif'

class Loading extends Component {
    render() {
        return (
            <div className='text-center my-3'>
                <img src={loadingSpinner} alt="Loading" style={{width:"70px", height:"70px"}}/>
            </div>
        );
    }
}
export default Loading;
