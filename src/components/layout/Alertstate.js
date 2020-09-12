import React from 'react'

const Alertstate = props => {
    
    // if(props.alertstate){
    //     console.log("fk off");
    //     console.log(props.alertstate);
        return props.alertstate === true && (
            <div className='alert alert-light'>
                <i className='fas fa-info-circle' /> Please enter something...
            </div>
        )
    // }
}

export default Alertstate
