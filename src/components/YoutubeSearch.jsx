
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';

const YoutubeEmbed = ({ videoId }) => (
  <div className="video-responsive w-full px-5 h-[40vh] md:h-[70vh] mb-10">
    <iframe
      width="100%"
      height="100%"
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

  const handleSearch = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_YoutubeAPIKey}=${searchQuery}+therapy+to+cure&part=snippet&maxResults=2`
    );
    setSearchResults(response.data.items);
  };

  const  {id} = useParams();
  console.log('searchParams - ', id);
  console.log('search - ', searchQuery);

  useEffect(() => {
    setSearchQuery(id);
  }, []);
  useEffect(() => {
    if(searchQuery != ''){
      handleSearch();
    }
  },[searchQuery]);

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search YouTube"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form> */}
      <h1 className="text-3xl font-bold font-poppins mb-4 text-center">{decodeURIComponent(searchQuery)}</h1>
      <div className='flex flex-col md:px-10 mb-10 md:w-3/5 justify-center items-center'>
        {searchResults.map((item, index) => (
          <YoutubeEmbed key={index} videoId={item.id.videoId} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;