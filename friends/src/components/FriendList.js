import { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

const FriendList = () => {
    const[friends, setFriends] = useState([])

    const getFriends = e => {
        e.preventDefault();
        axiosWithAuth()
        .get('api/friends')
        .then(res=> {
            setFriends(res.data)
        })
        .catch(err => console.error(err.response.message)) 
    }

    return (
        <div>
            <h2> Friend List </h2>
            <button onClick={getFriends}> See your Friends </button>
            <AddFriend/>
             
            {friends.map((friend) => (
               <div key={friend.id}>
                   <h3> Name: {' '} {friend.name} </h3>
                   <p> Age: {' '} {friend.age} </p>
                   <p> Email: {' '} {friend.email} </p>
                   
                </div>  
                
            ))}

        </div>
    )
}

export default FriendList
