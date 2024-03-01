import PropTypes from "prop-types";
import { useState } from "react";

const OCDTherapy = () => {

    const YoutubeEmbed = ({ videoId }) => (
        <div className="video-responsive w-full px-5 h-[40vh] md:h-[70vh] mb-10">
            <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );

    YoutubeEmbed.propTypes = {
        videoId: PropTypes.string.isRequired,
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-poppins text-center">Indicators of OCD detected.</h1>
            <h1 className="font-poppins font-medium text-xl text-center">Disclaimer: Please consult a healthcare professional for further assessment if needed.</h1>
            <h1 className="font-poppins font-medium text-2xl text-center">Empowering OCD Awareness: Access Personalized Therapy Resources Now!</h1>
            <div className="flex flex-col md:px-10 mb-10 md:w-3/5 justify-center items-center">
                <YoutubeEmbed videoId={'4euYnqMWT5w?si=uK-XXusa59vHHcit'} />
                <YoutubeEmbed videoId={'i4SGc64BwLM?si=PjPcjOL069y1ISYR'} />
                <YoutubeEmbed videoId={'G5dlLL3FFzg?si=x5ZvJq1J2_Ma2W7Q'} />
            </div>
        </div>
    );
};

export default OCDTherapy;
