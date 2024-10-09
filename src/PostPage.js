import { useParams, Link, useNavigate } from "react-router-dom"
import { useStoreState, useStoreActions } from 'easy-peasy'

const PostPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const deletePost = useStoreActions((actions) => actions.deletePost)
    const getPostById = useStoreState((state) => state.getPostById)
    const post = getPostById(id)
  
    const handleDelete = (id) => {
        deletePost(id)
        navigate('/')
    }

    return (
        <main className="PostPage">
            <article className="post">
                
                {post ? (
                <>
                    <h2>{post.title}</h2>
                    <p className="postDate">{post.datetime}</p>
                    <p className="postBody">{post.body}</p>
                    <button onClick={() => handleDelete(post.id)} className="deleteButton">Delete Post</button>
                    <Link to={`edit`}><button type="button" className="editButton">Edit Post</button></Link>
                </>
                ) : (
                    <>
                    <h2>Post not found</h2>
                    <p>Well, that's disappointing</p>
                    <Link to="/">Visit our home page</Link>
                    </>
                )}
            </article>
        </main>
    )
}

export default PostPage