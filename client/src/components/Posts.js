import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap'


const Posts = ({ post }) => {
    return (
        <Card className='post-card' style={{width: '70rem' }}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Blog post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/editpost">Edit post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link2">Comment</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <h6>Title</h6>
                    {post.title}
                </Card.Title>
                <Card.Text>
                    <p>Content</p>{post.content}
                {/* </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <Card.Text> */}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Posts
