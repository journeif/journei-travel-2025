import React, { useState } from 'react';
import Child from './Child';

// Import photos
import bigben from './assets/bigben.jpeg';
import jamaica from './assets/jamaica.jpeg';
import london from './assets/london.jpeg';
import paris from './assets/paris.jpeg';
import scotland from './assets/scotland.jpeg';

function Parent() {
    const [photoIndex1, setPhotoIndex1] = useState(0);
    const [photoIndex2, setPhotoIndex2] = useState(1);
    const [content, setContent] = useState("Traveling Girl - Mos Def");

    // Array of imported photos
    const photos = [bigben, jamaica, london, paris, scotland];
    const destinations = ['London', 'Jamaica', 'London', 'Paris', 'Scotland'];

    const changeContentAndPhoto = () => {
        const nextIndex1 = (photoIndex1 + 1) % photos.length;
        const nextIndex2 = (photoIndex2 + 1) % photos.length;

        setPhotoIndex1(nextIndex1);
        setPhotoIndex2(nextIndex2);

        // Change content dynamically
        setContent("Travelin Man - Mos Def or Travelin Girl - Dwele");
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>{content}</h1>
            
            <Child 
                content={`Destination 1: ${destinations[photoIndex1]}`}
                photo={photos[photoIndex1]}
                onContentChange={changeContentAndPhoto}
            />

            <Child 
                content={`Destination 2: ${destinations[photoIndex2]}`}
                photo={photos[photoIndex2]}
                onContentChange={changeContentAndPhoto}
            />
        </div>
    );
}

export default Parent;
