import PropTypes from "prop-types";

const OCDTherapy = () => {
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
            <h1 className="font-poppins">Indicators of OCD detected.</h1>
            <h1 className="font-poppins font-medium text-xl">Disclaimer: Please consult a healthcare professional for further assessment if needed.</h1>
            <h1 className="font-poppins font-medium text-2xl">Empowering OCD Awareness: Access Personalized Therapy Resources Now!</h1>
            <div className="flex flex-col mb-10 justify-center items-center">
                <YoutubeEmbed videoId={'4euYnqMWT5w?si=uK-XXusa59vHHcit'} />
                <YoutubeEmbed videoId={'i4SGc64BwLM?si=PjPcjOL069y1ISYR'} />
                <YoutubeEmbed videoId={'G5dlLL3FFzg?si=x5ZvJq1J2_Ma2W7Q'} />
            </div>
        </div>
    );
};

export default OCDTherapy;
