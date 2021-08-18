import React from 'react'

const EditPost = () => {

    return (
        <div>
            <form >
                <label for="title">Edit blog title:</label><br/>
                    <input  type="text" id="title" name="title" /><br/>
                <label for="content">Edit content:</label><br/>
                    <textarea  type="text" id="content" name="content" /><br/><br/>
                    <input type="submit" value="Submit"/>
            </form> 
        </div>
    )
}

export default EditPost
