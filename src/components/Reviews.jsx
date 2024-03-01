import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Reviews = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [aos, setAos] = useState('fade-up');

    window.addEventListener('resize', function(){

        if(window.innerWidth <= 768){
           setAos('fade-up'); 
        }
        else{
            setAos('fade-left');
        }
    });
    return (
        <div className="flex p-5 md:p-10 items-center my-10">
            <div className="flex flex-col md:flex-row px-5 md:px-0 md:w-4/5 mx-auto justify-around items-center">
                <div className="flex w-full justify-between md:w-6/12">
                    <div className="flex flex-col w-1/2">
                        <h1 className="font-poppins text-3xl md:text-5xl font-medium mb-1">4.8</h1>
                        <h1 className="text-sm md:text-[18pt] text-yellow-500">★★★★★</h1>
                        <h1 className="text-[12pt] md:text-[14pt] font-poppins font-semibold mb-1">2,394 Ratings</h1>
                        <h1 className="text-[12pt] md:text-[14pt] font-poppins font-semibold">Google Reviews</h1>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                        <h1 className="font-poppins text-3xl md:text-5xl font-medium mb-1">A+</h1>
                        <h1 className="text-sm md:text-[18pt] text-yellow-500">★★★★★</h1>
                        <h1 className="text-[12pt] md:text-[14pt] font-poppins font-semibold mb-1">125 Reviews</h1>
                        <h1 className="text-[12pt] md:text-[14pt] font-poppins font-semibold">BBB Rating</h1>
                    </div>
                </div>
                <div data-aos={aos} data-aos-duration="500" className="flex flex-col w-full md:w-6/12">
                    <h1 className="font-poppins text-3xl font-medium mb-1">Hear from Our Community</h1>
                    <h1 className="font-poppins text-xl text-green-700 font-normal">John Carter</h1>
                    <h1 className="font-poppins text-[14pt] font-normal text-gray-600">NeuroAssist has been a lifesaver for our family. Their web app diagnosed our child’s learning disability and connected us with a supportive community of other families. We don’t know what we would do without them!</h1>
                </div>
            </div>
        </div>
    )
}

export default Reviews;