import React from 'react'
import { Card, Button} from 'react-bootstrap'
import Errors from './Errors'

const BlogCardTab = ({ post, handleDeletePost, errors }) => {
    return (
        <>
            <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.content}
                </Card.Text>
                <Card.Text>
                    Posted by: {post.user.username} on {post.created_at}
                </Card.Text>
            <Button onClick={handleDeletePost} variant="primary">Delete post</Button>
            <Errors errors={errors} />
        </>
    )
}
export default BlogCardTab
