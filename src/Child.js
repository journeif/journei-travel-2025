import React from 'react';

const Child = ({ content, photo, onContentChange }) => {
    return (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h2>{content}</h2>
            <img src={photo} alt={content} style={{ width: '300px', height: '200px', borderRadius: '10px' }} />
            <br />
            <button onClick={onContentChange} style={{ padding: '10px', marginTop: '10px' }}>
                Explore Another Destination
            </button>
        </div>
    );
};

export default Child;
