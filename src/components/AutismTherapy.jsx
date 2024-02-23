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
            <h1>Autism Therapy</h1>
            <div className="flex flex-col mb-10 justify-center items-center">
                <YoutubeEmbed videoId={'pSGVb60-BSw?si=iHqc3oZNDYKUyuuu'} />
                <YoutubeEmbed videoId={'x4V0MREMu3Q?si=EZq8uYlNIt-HZZMH'} />
                <YoutubeEmbed videoId={'https://youtu.be/RBB_81ao7uo?si=pYga_l2-vcGjYQLO'} />
            </div>
        </div>
    );
};

export default AutismTherapy;
