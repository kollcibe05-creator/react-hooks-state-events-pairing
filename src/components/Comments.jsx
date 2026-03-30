import { useState } from "react";
import Comment from "./Comment.jsx";

function Comments ({comments, onSelectChange, onDelete}) {

const [search, setSearch] = useState("")
const handleChange = (e) => {
    setSearch(e.target.value)
}
const searchValue = comments.filter(comment => comment.user.includes(search))

const handleSelectChange = (e) => {
    onSelectChange(e.target.value)
} 

    return(
        <div className="commentContainer">
            <div className="flex-box">
            <input type="text" placeholder="Search comments by username..." onChange={handleChange} value={search}/>

            <select name="options" id="" onChange={handleSelectChange}>
            <option value="all">Default</option>
            <option value="username">Username</option>
            </select>

            </div>

            {searchValue.map(comment => <Comment key={comment.id}comment={comment} onDelete={onDelete}/>)}        
        </div>
    )
} 
export default Comments;