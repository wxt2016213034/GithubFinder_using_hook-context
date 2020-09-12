import React from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


const User =(props)=>{

        if(props.loading){
        return <Spinner /> 
        }else{
        return (
            <div style={userStyle}>
                {props.users.map(user =>(
                    <Useritem key={user.id} user={user}/>
                
                ))}
            </div>
        )
        }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  };


User.prototype={
    users:PropTypes.array.isRequired,
    loading:PropTypes.string.isRequired
}
export default User
