import Errors from './Errors'
import NewPost from './NewPost'
import Posts from './Posts'
import Nav from 'react-bootstrap/Nav'
import { useEffect, useState } from 'react'

const Home = ({ errors, posts }) => {




    const generatePosts = () => {
        return posts.map(post => {
            return <Posts post={post} />
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