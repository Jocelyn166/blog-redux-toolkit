import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postAdded } from "./postsSlice"
import { selectAllUsers } from "../users/usersSlice"

const AddPostForm = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [userId, setUserId] = useState('')

    const handleAddPost = ()=>{
        (postTitle && postBody) && dispatch(postAdded(postTitle, postBody, userId))
        setPostTitle('')
        setPostBody('')
        setUserId('')
    }
    const canSave = Boolean(postTitle) && Boolean(postBody) && Boolean(userId)
    const usersOptions = users.map(user =>(
        <option key={user.id} value={user.id}>{user.name}</option>
    ))

  return (
    <section>
        <h2>Add a New Post</h2>
        <form onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="postTitle">Post Title:</label>
            <input
                id="postTitle"
                type="text"
                value={postTitle}
                onChange={(e)=> setPostTitle(e.target.value)} 
            />   
            <label htmlFor="postAuthor">Author: </label>
            <select value={userId} onChange={(e)=>setUserId(e.target.value)}>
                <option value="">Select an option</option>
                {usersOptions}
            </select>     
            <label htmlFor="postBody">Post Content:</label>
            <textarea
                id="postBody"
                value={postBody}
                onChange={(e)=> setPostBody(e.target.value)} 
            />
            <button disabled= {!canSave} onClick={handleAddPost}>Submit</button>        
        </form>
    </section>
    
  )
}

export default AddPostForm