import { useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy'

const EditPost = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const editTitle = useStoreState((state) => state.editTitle)
    const editBody = useStoreState((state) => state.editBody)

    const editPost = useStoreActions((actions) => actions.editPost)
    const getPostById = useStoreActions((actions) => actions.getPostById)
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle)
    const setEditBody = useStoreActions((actions) => actions.setEditBody)

    const post = getPostById(id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])
  
    const handleEdit = (id) => {
        const datetime = format(new Date(), 'dd MMMM yyyy hh:ii')
        const updatedPost = {
          id,
          datetime,
          title: editTitle,
          body: editBody
        }
        editPost(updatedPost)
        navigate(`/post/${id}`)
    }

    return (
        <main className="AddPost">
            <h2>Edit Post</h2>
            <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="editTitle">Title</label>
                <input
                    id="editTitle"
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="editBody">Body</label>
                <textarea
                    id="editBody"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                ></textarea>
                <button type="button" onClick={() => handleEdit(id)}>Submit</button>
            </form>
        </main>
    )
}

export default EditPost