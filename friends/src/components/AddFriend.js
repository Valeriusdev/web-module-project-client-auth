import { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = ({ name, age, email }) => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const onChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });  
    }; 
    
    const onAdd = (e) => {
        axiosWithAuth()
        .post('api/friends', form)
        .then((res) =>{
            console.log(res);
        })
        .catch((err)=> console.log(err.message));
    }


    return (
        <div>
            <form onSubmit = {onAdd}>
                <label> Name: {' '}  </label>
                <input type='text' name='name' value={name} onChange={onChange} />
                <label> Age: {' '}  </label>
                <input type='text' name='age' value={age} onChange={onChange} />
                <label> Email: {' '}  </label>
                <input type='email' name='email' value={email} onChange={onChange} />
                <button> Add a Friend </button>
            </form>
        </div>
    )
}

export default AddFriend
