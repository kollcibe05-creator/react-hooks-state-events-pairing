import { useState } from "react";
function VideoDetails ({video}) {
    
    const [isLiked, setLike] = useState(false)
    const [isDisliked, setDisLike] = useState(false)
    const upVotes = isLiked ? video.upvotes + 1 : video.upvotes 
    const downVotes = isDisliked ? video.downvotes + 1 : video.downvotes 
    
    const toggleUpvote = () => {
        if (isDisliked === true) return 
        setLike(!isLiked)
    }  
    const toggleDownVote = () => {
        if(isLiked === true) return 
        setDisLike(!isDisliked)
    }  

    return (
        <>
            <h1>{video.title}</h1>
            <p><span>{video.views} Views</span> | Uploaded <span>{video.createdAt}</span></p>
            <button className={isLiked ? "active-like": ""} onClick={toggleUpvote}>{upVotes} 👍</button>
            <button className={isDisliked ? "active-dislike" : ""} onClick={toggleDownVote}>{downVotes}👎</button>
        </>
    )
}

export default VideoDetails