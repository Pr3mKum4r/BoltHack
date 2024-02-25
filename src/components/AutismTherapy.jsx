import PropTypes from "prop-types";

const AutismTherapy = () => {
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
        videoId: PropTypes.string.isRequired,
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-poppins">Indicators of autism detected.</h1>
            <h1 className="font-poppins font-medium text-xl">Disclaimer: Please consult a healthcare professional for further assessment if needed.</h1>
            <h1 className="font-poppins font-medium text-2xl">Empowering Autism Awareness: Access Personalized Therapy Resources Now!</h1>
            <div className="flex flex-col mb-10 justify-center items-center">
                <YoutubeEmbed videoId={'pSGVb60-BSw?si=iHqc3oZNDYKUyuuu'} />
                <YoutubeEmbed videoId={'x4V0MREMu3Q?si=EZq8uYlNIt-HZZMH'} />
                <YoutubeEmbed videoId={'PyZvOP3L_gY?si=ZA0MT703NRGzTwKB'} />
            </div>
        </div>
    );
};

export default AutismTherapy;
