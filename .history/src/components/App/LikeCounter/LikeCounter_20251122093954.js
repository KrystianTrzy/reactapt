import React, { useState } from 'react'
import './LikeCounter.css'

function LikeCounter({ title, description, count = 0 }) {
    const [likes, setLikes] = useState(Number(count)); 
    const handleLike = () => {
        setLikes(likes + 1);
    };
    
    const handleUnlike = () => {
        if (likes > 0) {
            setLikes(likes - 1);
        }
    };

    return (
        <div className="post" style={{backgroundColor: color }}>
            <p style={{ color: likes > 0 ? 'blue' : 'black' }}>Like Counter {likes}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="actions">
                <button onClick={handleLike}>Like</button>
                <button onClick={handleUnlike}>Unlike</button>
            </div>
        </div>
    )
}

export default LikeCounter;