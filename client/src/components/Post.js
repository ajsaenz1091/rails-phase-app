import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap'


const Post = ({ post, posts, setPosts }) => {

    const {id} = post

    // function handleDeleteActivity(id) {
    //     fetch(`/activities/${id}`, {
    //       method: "DELETE",
    //     }).then((r) => {
    //       if (r.ok) {
    //         setActivities((activities) =>
    //           activities.filter((activity) => activity.id !== id)
    //         );
    //       }
    //     });
    //   }
    
    const handleDelete = () => {
        fetch(`/posts/${id}`, {method: "DELETE",})
        .then(r => {
            if (r.ok){
                setPosts(posts.filter(post => post.id !== id))
            }
        })
    }

    return (
        <Card className='post-card'>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Blog post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Edit post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#disabled">Comments</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.content}
                </Card.Text>
                <Button variant="primary" onClick={handleDelete}>Delete post</Button>
            </Card.Body>
        </Card>
    )
}

export default Post
