import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


const EditPost = ({ post, setPosts, posts, setState }) => {
    const { id } = post

    const [form, setForm] = useState({ title: post.title, content: post.content })

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hello")
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
                console.log(data)
                setPosts(posts.map(singlePost => singlePost.id === id ? data.post : singlePost))}
            )
        setState("#first")
    }
    
   
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="title">Edit blog title:</label><br />
                <input onChange={onChange} type="text" id="title" name="title" value={form.title} /><br />
                <label htmlFor="content">Edit content:</label><br />
                <textarea onChange={onChange} type="text" id="content" name="content" value={form.content} /><br /><br />
                {/* <input type="submit" value="Update"/> */}
                <Button type="submit" variant="primary">Update post</Button>
            </form>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    )
}
export default EditPost
