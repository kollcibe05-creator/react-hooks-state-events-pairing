import { useState } from "react";

function Comment ({comment, onDelete}) {
    const [isLiked, setLike] = useState(false)
    const [isDisliked, setDisLike] = useState(false)

    const upVotes = isLiked ? comment.likes + 1 : comment.likes 
    const downVotes = isDisliked ? comment.dislikes + 1 : comment.dislikes 
    
    const toggleUpvote = () => {
        if (isDisliked === true) return 
        setLike(!isLiked)
    }  
    const toggleDownVote = () => {
        if(isLiked === true) return 
        setDisLike(!isDisliked)
    }  
    return(
        <>
            <h2>{comment.user}</h2>
            <p className="comment">{comment.comment}</p>
            <button className={isLiked ? "active-like": ""} onClick={toggleUpvote}>{upVotes} 👍</button>
            <button className={isDisliked ? "active-dislike" : ""} onClick={toggleDownVote}>{downVotes}👎</button>
            <button className="delete" onClick={() => onDelete(comment.id)}>🗑️</button>
        </>
    )
}
export default Comment