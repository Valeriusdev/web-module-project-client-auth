import { useState } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {

    const { username, password } = props;
    const [credentials, setCredentials] = useState ({
        username: "",
        password: "",
    });

    const onChange = (e) => {
        e.preventDefault();
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value, 
        });
    };

    const onLogin = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('api/login', credentials)
        .then((res) => {
            window.localStorage.setItem('token', res.data.payload)
            props.history.push('/protected')
        })
        .catch((err) => console.error(err.message));
    };  

    return (
        <div>
          <form onSubmit={onLogin}>
              <input type='text' name='username' value={username}
              onChange={onChange} />
              <input type='password' name='password' value={password}
              onChange={onChange} />
              <button> Log in </button>
          </form>   
        </div>
    );
};

export default Login
