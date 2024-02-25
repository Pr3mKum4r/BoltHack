const DyslexiaResults = () =>{
    return(
        <div className="flex flex-col items-center container mx-auto">
            <div className=" flex justify-center flex-col bg-gray-300 px-10 rounded my-10 min-h-[60vh] min-w-[40vw] w-1/2">
                <h1 className="font-poppins">No indicators of Dyslexia detected.</h1>
                <h1 className="font-poppins font-medium"> Please consult a healthcare professional for further assessment if needed.</h1>
            </div>
        </div>
    )
}

export default DyslexiaResults;