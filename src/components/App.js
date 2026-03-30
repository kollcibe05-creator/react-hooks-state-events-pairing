import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
import { useState } from "react";
import Comments from "./Comments.jsx";

function App() {
  const [displayedComments, setDisplayedComments] = useState(video.comments)
  const[hideComments, setHideComments] = useState(false)
  function handleSelectChange(value) {    
        let comments = [...video.comments]
          if  (value === "username") {
              comments.sort((a, b) => a.user.localeCompare(b.user))
          }
        setDisplayedComments(comments)  
  }
  const toggleHide = () => setHideComments(!hideComments) 
  function deleteComment (id) {
      const comments = video.comments.filter(comment => comment.id !== id)
    setDisplayedComments(comments)
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0" //*considered deprecated
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails video={video}/>
      <button className="comments-btn" onClick={toggleHide}>{hideComments ? "Show Comments" : "Hide Comments"}</button>
      {hideComments ? null : <Comments comments={displayedComments} onSelectChange={handleSelectChange}onDelete={deleteComment}/>}
    </div>
  );
  
}

export default App;
