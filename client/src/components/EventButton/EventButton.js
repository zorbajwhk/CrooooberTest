import React from 'react';
import './EventButton.css';
import '../../util/callAPI';
import callApi from '../../util/callAPI';

 class EventButton extends React.Component{
    render(){
        return(
            <div className="Button">
                <button onClick={callApi}>Click Me!</button>
            </div>
        );
    }
 }

 export default EventButton;