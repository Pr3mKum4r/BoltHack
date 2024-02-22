import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";

const Services = () => {
    return (
        <div className="flex p-10 bg-[#F4F8FD] items-center">
            <div className="flex flex-col w-4/5 mx-auto justify-around items-center">
                <div className="flex items-center justify-between w-full">
                    <h1 className="font-poppins text-5xl font-medium mb-5">
                        Our Services
                    </h1>
                    <div
                        type="button"
                        className="h-fit text-white w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        View All Services
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col w-1/3 mr-7">
                        <img src="childDiagnosis.webp" alt="alt" className="w-full" />
                        <h1 className="text-lg font-poppins font-semibold mb-1 mt-5">
                            Child Diagnosis
                        </h1>
                        <h1 className="text-lg font-poppins font-normal text-gray-600">
                            Our child diagnosis services provide accurate and reliable
                            diagnoses of conditions such as ADHD, dyslexia, and dysgraphia,
                            helping children get the support they need for…
                        </h1>
                        <h1 className="text-sm font-poppins font-normal text-green-500">
                            Read More...
                        </h1>
                    </div>
                    <div className="flex flex-col w-1/3 mr-7">
                        <img src="landing.webp" alt="alt" className="w-full" />
                        <h1 className="text-lg font-poppins font-semibold mb-1 mt-5">
                            Learning Disability Detection
                        </h1>
                        <h1 className="text-lg font-poppins font-normal text-gray-600">
                            Our learning disability detection services use advanced technology
                            to detect a range of learning disabilities, allowing for early
                            intervention and support for children and their…
                        </h1>
                        <h1 className="text-sm font-poppins font-normal text-green-500">
                            Read More...
                        </h1>
                    </div>
                    <div className="flex flex-col w-1/3 ml-7">
                        <img src="community.webp" alt="alt" className="w-full" />
                        <h1 className="text-lg font-poppins font-semibold mb-1 mt-5">
                            Community Integration
                        </h1>
                        <h1 className="text-lg font-poppins font-normal text-gray-600">
                            Our community integration services provide a supportive
                            environment for families and children coping with health
                            conditions, connecting them with similar experiences and providing
                            a sense…
                        </h1>
                        <h1 className="text-sm font-poppins font-normal text-green-500">
                            Read More...
                        </h1>
                    </div>
                </div>

                <div className="inline-flex items-center justify-center w-full my-10">
                    <hr className="h-px w-full my-8 bg-gray-600 border-0 dark:bg-gray-700" />
                    <span className="absolute font-poppins px-3 font-medium text-gray-700 -translate-x-1/2 bg-[#F4F8FD] left-1/2 dark:text-white dark:bg-gray-900">
                        Features & Benefits
                    </span>
                </div>

                <div className="flex justify-around w-full">
                    <div className="flex flex-col w-1/3 mr-7">
                        <h1 className="text-3xl font-poppins font-semibold mb-1 mt-5">
                            Features
                        </h1>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Accurate Diagnosis
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Community Integration
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Cutting-Edge Web App
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Innovative Research
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Expert Support Team
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/3 mr-7">
                        <h1 className="text-3xl font-poppins font-semibold mb-1 mt-5">
                            Features
                        </h1>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Empowered Families
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Connected Community
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Invaluable Resources
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Accurate Diagnoses
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <AlbumOutlinedIcon
                                sx={{ color: "green", height: "20px", width: "20px" }}
                            />
                            <h1 className="text-lg font-poppins font-normal ml-3 text-gray-600">
                                Life-Changing Results
                            </h1>
                        </div>
                    </div>

                    <img src="features.webp" alt="alt" className="w-[400px] rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Services;
