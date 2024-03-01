import PropTypes from "prop-types";
import { useState } from "react";

const AutismTherapy = () => {

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
            <h1 className="font-poppins text-center">Indicators of autism detected.</h1>
            <h1 className="font-poppins font-medium text-xl text-center">Disclaimer: Please consult a healthcare professional for further assessment if needed.</h1>
            <h1 className="font-poppins font-medium text-2xl text-center">Empowering Autism Awareness: Access Personalized Therapy Resources Now!</h1>
            <div className="flex flex-col md:px-10 mb-10 md:w-3/5 justify-center items-center">
                <YoutubeEmbed videoId={'pSGVb60-BSw?si=iHqc3oZNDYKUyuuu'} />
                <YoutubeEmbed videoId={'x4V0MREMu3Q?si=EZq8uYlNIt-HZZMH'} />
                <YoutubeEmbed videoId={'PyZvOP3L_gY?si=ZA0MT703NRGzTwKB'} />
            </div>
        </div>
    );
};

export default AutismTherapy;
