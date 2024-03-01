import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section id="services">
        <div className="flex p-5 md:p-10 bg-[#F4F8FD] items-center">
            <div className="flex flex-col w-full px-5 md:px-0 md:w-4/5 mx-auto justify-around items-center">
                <div className="flex items-center justify-between w-full mb-5">
                    <h1 className="font-poppins text-5xl font-medium mb-5">
                        Our Services
                    </h1>
                    {/* <div
                        type="button"
                        className="h-fit text-white w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        View All Services
                    </div> */}
                </div>
                <div className="flex flex-col md:flex-row">
                    <div data-aos="fade-up" data-aos-duration="500" className="flex flex-col mb-10 md:mb-0 w-full md:w-1/3 mr-0 md:mr-7">
                        <img src="childDiag.webp" alt="alt" className="w-full" />
                        <h1 className="text-lg font-poppins font-semibold mb-1 mt-5">
                            Child Diagnosis
                        </h1>
                        <h1 className="text-lg font-poppins font-normal text-gray-600">
                        Our child diagnosis services harness GenAI technology to provide initial diagnosis for a wide range of mental disorders, including but not limited to ADHD, dyslexia, and dysgraphia. We provide users with relevant therapy videos.
                        </h1>
                        <a type="button" href="/gemini" className="font-poppins text-white w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Checkout</a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" className="flex flex-col mb-10 md:mb-0 w-full md:w-1/3 md:ml-7">
                        <img src="learningDis.webp" alt="alt" className="w-full" />
                        <h1 className="text-lg font-poppins font-semibold mb-1 mt-5">
                            Test for Autism Detection
                        </h1>
                        <h1 className="text-lg font-poppins font-normal text-gray-600">
                            Our autism detection services utilize machine learning algorithms to identify patterns indicative of autism spectrum disorder, enabling early detection and intervention for individuals and their families.
                        </h1>
                        <a type="button" href="/autism" className="font-poppins text-white w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Checkout</a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" className="flex flex-col mb-10 md:mb-0 w-full md:w-1/3 md:ml-7">
                        <img src="OCD.png" alt="alt" className="w-full" />
                        <h1 className="text-lg font-poppins font-semibold mb-1 mt-5">
                            Test for OCD
                        </h1>
                        <h1 className="text-lg font-poppins font-normal text-gray-600">
                        Our OCD detection services employ machine learning algorithms detect Obsessive-Compulsive Disorder. Through the analysis of diverse factors including demographic information and symptom severity.
                        </h1>
                        <a type="button" href="/ocd" className="font-poppins text-white w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Checkout</a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" className="flex flex-col mb-10 md:mb-0 w-full md:w-1/3 md:ml-7">
                        <img src="dyslexia.webp" alt="alt" className="w-full" />
                        <h1 className="text-lg font-poppins font-semibold mb-1 mt-5">
                            Test for Dyslexia
                        </h1>
                        <h1 className="text-lg font-poppins font-normal text-gray-600">
                        Engage in our interactive web game designed to seamlessly assess Dyslexia indicators. Your gameplay data fuels our advanced Machine Learning algorithms, swiftly generating results to determine the presence of Dyslexia.
                        </h1>
                        <a type="button" href="/game1Instructions" className="font-poppins text-white w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Checkout</a>
                    </div>
                </div>

                <div className="inline-flex items-center justify-center w-full my-10">
                    <hr className="h-px w-full my-8 bg-gray-600 border-0 dark:bg-gray-700" />
                    <span className="absolute font-poppins px-3 font-medium text-gray-700 -translate-x-1/2 bg-[#F4F8FD] left-1/2 dark:text-white dark:bg-gray-900">
                        Features & Benefits
                    </span>
                </div>

                <div className="flex flex-col-reverse md:flex-row justify-around w-full">
                    <div className="flex flex-col w-full md:w-1/3 mr-7">
                        <h1 className="text-3xl font-poppins font-semibold mb-1 mt-5">
                            Features
                        </h1>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Accurate Diagnosis
                            </h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Community Integration
                            </h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Cutting-Edge Web App
                            </h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Innovative Research
                            </h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Expert Support Team
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col w-full md:w-1/3 mr-7">
                        <h1 className="text-3xl font-poppins font-semibold mb-1 mt-5">
                            Features
                        </h1>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Empowered Families
                            </h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Connected Community
                            </h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Invaluable Resources
                            </h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Accurate Diagnoses
                            </h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Life-Changing Results
                            </h1>
                        </div>
                    </div>

                    <img src="features.webp" alt="alt" className="w-[250px] md:w-[400px] rounded-md" />
                </div>
            </div>
        </div>
        </section>
    );
};

export default Services;
