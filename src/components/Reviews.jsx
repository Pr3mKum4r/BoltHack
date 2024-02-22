import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Reviews = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="flex p-10 items-center my-10">
            <div className="flex w-4/5 mx-auto justify-around items-center">
                <div className="flex flex-col w-3/12">
                    <h1 className="font-poppins text-5xl font-medium mb-1">4.8</h1>
                    <h1 className="text-md text-yellow-500">★★★★★</h1>
                    <h1 className="text-[14pt] font-poppins font-semibold mb-1">2,394 Ratings</h1>
                    <h1 className="text-[14pt] font-poppins font-semibold">Google Reviews</h1>
                </div>
                <div className="flex flex-col w-3/12">
                    <h1 className="font-poppins text-5xl font-medium mb-1">A+</h1>
                    <h1 className="text-md text-yellow-500">★★★★★</h1>
                    <h1 className="text-[14pt] font-poppins font-semibold mb-1">125 Reviews</h1>
                    <h1 className="text-[14pt] font-poppins font-semibold">BBB Rating</h1>
                </div>
                <div data-aos="fade-left" data-aos-duration="500" className="flex flex-col w-6/12">
                    <h1 className="font-poppins text-3xl font-medium mb-1">Hear from Our Community</h1>
                    <h1 className="font-poppins text-xl text-green-700 font-normal">John Carter</h1>
                    <h1 className="font-poppins text-[14pt] font-normal text-gray-600">MediCure has been a lifesaver for our family. Their web app diagnosed our child’s learning disability and connected us with a supportive community of other families. We don’t know what we would do without them!</h1>
                </div>
            </div>
        </div>
    )
}

export default Reviews;