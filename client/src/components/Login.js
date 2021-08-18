import { useState } from 'react'
import Errors from './Errors'

const Login = ({ handleUserLoginAndSignup, errors }) => {

    const [state, setState] = useState({})
    
    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/login', config)
        .then(resp => resp.json())
        .then(data => handleUserLoginAndSignup(data))

    }


    return(
        <div>
            <br/>
            <h5>Member sign in.</h5>
            <p>Already a member?  Please sign in below.</p>
            <br/>
            <form onSubmit={onSubmit}>
                {/* <label>Username</label> */}
                <input onChange={onChange} name='username' type='text' placeholder='username' />
                <br/>
                {/* <label>Password</label> */}
                <input onChange={onChange} name='password' type='password' placeholder='password' />
                <br/>
                <input type='submit' value='Login'/>
            </form>
            <br/>
            <Errors errors={errors} />
        </div>
    )


}

export default Login;