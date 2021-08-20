import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost';
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

const App = () => {

  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [posts, setPosts] = useState([]);
  
  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
    if(!data.errors) {
      history.push('/home')
      setErrors([])
    }
  }

  const checkSessionId = () => {
    fetch('/me')
    .then(resp => resp.json())
    .then(data => setCurrentUser(data.user))
  }
  
  // useEffect(checkSessionId, []);


  const fetchPosts = () => {
    fetch('/posts')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setPosts(data)
    })
  }

  useEffect(() => {
    fetchPosts()
    checkSessionId()
  }, [])
  

  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
        <h1>
        { currentUser ? `Welcome back ${currentUser.username}!` : null }
        </h1>
      <Switch>
        <Route exact path='/home'>
          <Home errors={errors} currentUser={currentUser} posts={posts} setPosts={setPosts} />
        </Route>
        <Route exact path='/signup'>
          <Signup handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
        </Route>
        <Route exact path='/login'>
            <Login handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
        </Route>
        <Route exact path='/logout'>
            <Logout setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path='/newpost'>
            <NewPost setCurrentUser={setCurrentUser} handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} setPosts={setPosts} posts={posts} />
        </Route>
        <Route exact path='/editpost'>
            <EditPost setCurrentUser={setCurrentUser} handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;