import { useEffect } from "react";
import axios from "axios";

const Hero = () =>{
    useEffect(() => {
        const asyncFunc = async () => {
            const res = await axios.get("https://bolthack.onrender.com/test");
            console.log(res.data);
        }
        asyncFunc();
    }, []);
    return(
        <div className="flex mx-auto bg-[#F4F8FD] p-10 md:h-[580px]">
            <div className="flex-col-reverse md:flex-row flex w-full md:w-4/5 mx-auto items-center">
                <div className="flex flex-col px-5">
                    <h1 className="font-poppins font-semibold text-[30pt] md:text-[60px] mb-2">
                        Revolutionizing Learning Disability Diagnosis
                    </h1>
                    <h1 className="text-[15pt] md:text-lg font-poppins font-normal">
                        NeuroAssist is a cutting-edge medical research organization dedicated
                        to empowering children and families affected by learning
                        disabilities. Through our innovative web app, we provide accurate
                        diagnoses and a supportive community.
                    </h1>
                    <a type="button" href="#services" className="font-poppins text-white w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View All Services</a>
                </div>
                <div>
                    <img
                        src="main.webp"
                        alt="img"
                        className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;