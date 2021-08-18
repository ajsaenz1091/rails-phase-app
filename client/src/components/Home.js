import Errors from './Errors'
import NewPost from './NewPost'
import Post from './Post'
import Nav from 'react-bootstrap/Nav'
import { useEffect, useState } from 'react'

const Home = ({ errors, posts, setPosts }) => {




    const generatePosts = () => {
        return posts.map(post => {
            return <Post post={post} posts={posts} setPosts={setPosts} />
        })
    }

    return (
        <div>
            <Errors errors={errors} />
            <p>home page</p>
            {generatePosts()}
            <br/>
            {/* <h1>Welcome to your homepage!</h1> */}
            {/* <NewPost /> */}
        </div>
    )

}
export default Home