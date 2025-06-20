 Movie Search Tracker

A movie search tracker built with **React** and **Appwrite**, inspired by the tutorial video you shared.  
This app lets users search for movies (using TMDB), and logs each search term along with a count, storing metadata in Appwrite.

---

Features

- 🎬 Search movies by title via TMDB API  
- 📈 Track how many times each movie has been searched  
- 🗂️ Store movie metadata: `movie_id`, `poster_url`  
- 🛠️ Prevent duplicate entries by incrementing count if already searched  
- 📡 Fully managed backend with Appwrite (Database + API)

---

 Technology Stack

 **Frontend**: React (using Vite or Create React App)  
 **Backend**: Appwrite (Databases SDK)  
 **Movie Data**: The Movie Database (TMDB) API



 🔧 Prerequisites

- react js  
- Appwrite account & project  
- TMDB API key  



 ⚙️ Getting Started

 1. Clone & Install


git clone https://github.com/your-username/movie-search-tracker.git
cd movie-search-tracker
npm install
