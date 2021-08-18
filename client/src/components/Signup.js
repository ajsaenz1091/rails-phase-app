import { useState } from 'react'
import Errors from './Errors'

const Signup = ({ handleUserLoginAndSignup, errors }) => {

    const [state, setState] = useState({})
    

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/users', config)
        .then(resp => resp.json())
        .then(data => handleUserLoginAndSignup(data))
    }


    return(
        <div>
            <br/>
            <h5>Become a member of our community!</h5>
            <br/>
            <form onSubmit={onSubmit}>
                {/* <label>Username</label> */}
                <input onChange={onChange} name='username' type='text' placeholder='username' />
                <br/>
                {/* <label>Password</label> */}
                <input onChange={onChange} name='password' type='password' placeholder='password' />
                <br/>
                {/* <label>Password Confirmation</label> */}
                <input onChange={onChange} name='password_confirmation' type='password' placeholder='password confirmation' />
                <br/>
                <br/>
                <input type='submit' value='Signup'/>
            </form>
            <br/>
            <Errors errors={errors} />
            <p>Members who sign up will have ability to create and edit their own blogs.</p>
        </div>
    )


}

export default Signup;