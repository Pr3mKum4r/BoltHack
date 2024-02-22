
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

const YoutubeEmbed = ({ videoId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  videoId: PropTypes.string.isRequired
};


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyADtAr2moHoPH4Y_4AT7FfQJ6JZfaS6174&q=${encodeURIComponent(searchQuery)}&part=snippet&maxResults=20`
    );
    setSearchResults(response.data.items);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search YouTube"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map((item, index) => (
          <YoutubeEmbed key={index} videoId={item.id.videoId} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;