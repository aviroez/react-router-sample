import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import AboutPage from './AboutPage'
import MissingPage from './MissingPage'
import Layout from './Layout'
import EditPost from './EditPost.js'
import { useStoreActions } from 'easy-peasy'
import useAxiosFetch from './hooks/useAxiosFetch.js'
import { useEffect } from 'react'

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts)
  const { data } = useAxiosFetch('http://localhost:3500/posts')

  useEffect(() => {
    setPosts(data)
  }, [data, setPosts])

  return (
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />

          <Route path="post" >
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />

            <Route path=":id/edit" element={<EditPost />} />
          </Route>

          <Route path="about" element={<AboutPage />} />

          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
  );
}

export default App;
