import React, { useState } from 'react';

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

    // Array of destinations
    const destinations = ['London', 'Jamaica', 'London', 'Paris', 'Scotland'];

    const changeContentAndPhoto = () => {
        const nextIndex1 = (photoIndex1 + 1) % photos.length;
        const nextIndex2 = (photoIndex2 + 1) % photos.length;

        setPhotoIndex1(nextIndex1);
        setPhotoIndex2(nextIndex2);

        // Set the content based on the destination of the first photo
        setContent("Travelin Man - Mos Def or Travelin Girl - Dwele");
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>{content}</h2> {/* Static content title */}
            <div style={{ display: 'flex' }}>
                <div>
                    <img
                        src={photos[photoIndex1]}
                        alt={`Destination 1: ${destinations[photoIndex1]}`}
                        style={{ width: '300px', height: '200px', marginRight: '10px' }}
                    />
                    <p>{`Destination 1: ${destinations[photoIndex1]}`}</p>
                </div>
                <div>
                    <img
                        src={photos[photoIndex2]}
                        alt={`Destination 2: ${destinations[photoIndex2]}`}
                        style={{ width: '300px', height: '200px' }}
                    />
                    <p>{`Destination 2: ${destinations[photoIndex2]}`}</p>
                </div>
            </div>
            <button onClick={changeContentAndPhoto} style={{ padding: '10px', marginTop: '20px' }}>
                Explore Another Destination
            </button>
        </div>
    );
}

export default Parent;
