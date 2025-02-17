Journei's International Travel - 2025

This project showcases my international travel journey for 2025. It's a React app that displays various destinations I traveled to, and includes interactive components that change images and content when buttons are clicked.

Overview

In this project:

I created a React app that uses multiple child components to display photos from my travels.
The photos and content dynamically change when buttons are clicked.
This app includes a YouTube video showcasing my journey.
The app is built to highlight my travels to five different countries in 2025.
Countries Traveled:
- London 
- Jamaica
- France
- Scotland
- Ireland
Features

Interactive Components: Each destination photo can be cycled through with the press of a button.
Dynamic Content: The displayed destination name and the background photo change based on user interaction.
YouTube Video: A video documenting my travels in 2025 is embedded within the app.
Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository
git clone https://github.com/journeif/journei-travel-2025.git
cd journei-travel-2025
2. Install Dependencies
This project uses Node.js and npm. To install the necessary dependencies, run:

npm install
3. Start the development server
Once the dependencies are installed, you can run the app locally:

npm start
This will open the app in your browser at http://localhost:3000.

4. Visit the App
Navigate to http://localhost:3000 in your browser to see the app in action.

Files

src/App.js
This is the main parent component that displays the child components for the different destinations I visited.

src/Child.js
This is the child component that receives the props (destination photo and name) and displays the content dynamically.

public/index.html
Contains the general structure of the HTML page. This file includes the embedded YouTube video and a section for the destination content.

public/assets/
This folder contains images for the different destinations I visited. Each image is labeled with its respective destination (e.g., London, Paris, etc.).

Technologies Used

React: A JavaScript library for building user interfaces.
HTML/CSS: Used for styling and structuring the app.
YouTube API: Embedded video from my international travel journey.
Acknowledgements

The images were sourced from my personal travel collection, representing each destination I visited in 2025.
The YouTube video was created to document my experiences during the trip.
