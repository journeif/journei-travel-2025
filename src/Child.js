import React from 'react';

const Child = ({ content, photo, onContentChange }) => {
    return (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h2>{content}</h2>
            <img src={photo} alt="Photo from my journey" style={{ width: '200px', height: 'auto' }} />
            <br />
            <button onClick={onContentChange} style={{ padding: '10px', marginTop: '10px' }}>
                Explore Another Destination
            </button>
        </div>
    );
};

export default Child;
