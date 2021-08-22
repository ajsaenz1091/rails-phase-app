import React, { useState, useEffect } from 'react'
import EditPost from './EditPost'
import BlogCardTab from './BlogCardTab'
import { Card,Nav } from 'react-bootstrap'

const Post = ({ errors, post, setPosts, posts, key }) => {

    const { id } = post

    const [state, setState] = useState('#first')
    const blogTab = React.createRef()
    const editTab = React.createRef()

    const handleDeletePost = () => {
        let config = {
            method: 'DELETE'
        }
        fetch(`/posts/${id}`, config)
            .then(resp => {
                if (resp.ok) {
                    setPosts(posts.filter(post => post.id !== id))
                }
            })
    }

    const handleTab = (e) => {
        console.log(e.target)
        if(e.target.href.includes('#link')){
            blogTab.current.className = "nav-link"
            editTab.current.className = "nav-link active"
        } 
        setState(e.target.href)
    }

    const renderTab = () => {
        if(state.includes('#first')){
            return <BlogCardTab post={post} handleDeletePost={handleDeletePost} errors={errors} />
        } else if (state.includes('#link')) {
            return <EditPost blogTab={blogTab} editTab={editTab} handleTab={handleTab} setState={setState} post={post} setPosts={setPosts} posts={posts} />
        } else {
            return <p>Comments section comming soon!</p>
        }
    }

    return (
        <Card id={post.id} className="post-card" border="dark" bg="light">
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey={state}>
                    <Nav.Item>
                        <Nav.Link class="nav-link active" ref={blogTab} onClick={ handleTab } href="#first">Blog post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link ref={editTab} onClick={ handleTab } href="#link">Edit post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  onClick={ handleTab } href="#disabled">Comments</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {renderTab()}
            </Card.Body>
        </Card>
    )
}
export default Post
