import React, { useState } from 'react'
import './LikeCounter.css'

function LikeCounter(props) {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(likes + 1);
    };
    
    const handleUnlike = () => {
        if (likes > 0) {
            setLikes(likes - 1);
        }
    };

    return (
        <div className="post">
            <p style={{ color: likes > 0 ? 'blue' : 'black' }}>Like Counter {likes}</p>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="actions">
                <button onClick={handleLike}>Like</button>
                <button onClick={handleUnlike}>Unlike</button>
            </div>
        </div>
    )
}

export default LikeCounter;