// rafce
import { useState } from 'react'
import Errors from './Errors'

const NewPost = ({ handleCreatePost, errors, setPosts, posts }) => {

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
        fetch('/posts', config)
        .then(resp => resp.json())
        .then(data => {
            if(!data.error){
                handleCreatePost(data)
            }
        })
    }


    return(
        <div>
            <form onSubmit={onSubmit} >
                <label for="title">Blog Title:</label><br/>
                    <input onChange={onChange} type="text" id="title" name="title" /><br/>
                <label for="content">Content:</label><br/>
                    <textarea onChange={onChange} type="text" id="content" name="content" /><br/><br/>
                    <input type="submit" value="Submit"/>
            </form> 
            <br/>
            <Errors errors={errors} />
        </div>
    )


}

export default NewPost;