import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


const EditPost = ({ post, setPosts, posts, setState, blogTab, editTab }) => {
    const { id } = post

    const [form, setForm] = useState({ title: post.title, content: post.content })

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch(`/posts/${id}`, config)
            .then(resp => resp.json())
            .then(data => {
                if(!data.error){
                    setPosts(posts.map(singlePost => singlePost.id === id ? data.post : singlePost))
                }
            }
            )
        blogTab.current.className = "nav-link active"
        editTab.current.className = "nav-link"
        setState("#first")
    }
    
   
    return (
        <div>
            {/*<form onSubmit={handleSubmit} >
                <label htmlFor="title">Edit blog title:</label><br />
                <input onChange={onChange} type="text" id="title" name="title" value={form.title} /><br />
                <label htmlFor="content">Edit content:</label><br />
                <textarea onChange={onChange} type="text" id="content" name="content" value={form.content} /><br /><br />
                {/* <input type="submit" value="Update"/> */}
                {/*<Button type="submit" variant="primary">Update post</Button>
    </form>*/}
            <Form onSubmit={ handleSubmit } >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Blog title</Form.Label>
                    <Form.Control onChange={ onChange } value={ form.title  } name='title' type="text" placeholder="Blog subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Blog Content</Form.Label>
                    <Form.Control onChange={ onChange } value={ form.content } name="content" type='text' as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" variant="outline-primary" size="sm" >Update post</Button>
            </Form>
        </div>


    )
}
export default EditPost
