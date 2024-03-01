import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from "react-router";

function GeminiPro() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [MedicalHistory, setMedicalHistory] = useState("");
  const [symptoms, setsymptoms] = useState("");
  const [FunctionalLimitations, setFunctionalLimitations] = useState("");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCMdBP76wyidbFx3SCNEQ5AGXVPTwvKpZI"
  );

  function parseStringToJson(inputString) {
    // Check if input string starts with markdown code block syntax
    if (inputString.startsWith("")) {
      // Remove the markdown code block syntax and any leading/trailing whitespace
      inputString = inputString.replace(/json\n?|```\n?/g, "").trim();
    }

    // Parse the cleaned string into JSON
    let jsonObj;
    try {
      jsonObj = JSON.parse(inputString);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      // Handle the error or return null/undefined
      return undefined;
    }

    return jsonObj;
  }

  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `The age of the person is ${age},The gender of the person is ${gender} the Medical history(Past diagnoses, current medications, family history of neurological disorders, etc) is: ${MedicalHistory} , the symptoms(Specific symptoms experienced, onset and duration, severity, impact on daily life, etc) are ${symptoms},the functional limitations( Difficulties with mobility, speech, cognitive function, etc) are :${FunctionalLimitations}  suggest which neurological disorder the person has as a preliminary research purpose diagnosis and its treatment options adn reccomend visiting the specialist doctor related to this disorder.Give me the anwser in string with json like format so that it can be converted to JSON, give json fixed headers as preliminary_diagnosis, specialist_doctor, treatment_options , always give treatment options even if null in an array. `;

   

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    let res = parseStringToJson(text);
    // const data = JSON.parse(text);
    console.log(res);
    setApiData(res);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(name, gender, age, MedicalHistory, symptoms);
    fetchData();
  };

  const navigate = useNavigate();

  const handleYouTubeIconClick = (element) => {
    // Navigate with query parameters
    navigate(`/yt/${encodeURIComponent(element)}`);
  };

  return (
    <div className="flex flex-col items-center container mx-auto">
      <div className="mx-5 md:mx-0 flex justify-center flex-col items-center bg-gray-300 px-10 rounded my-10 min-h-[60vh] md:min-w-[40vw]">
        {apiData ?
          <>
            {apiData.preliminary_diagnosis && apiData.specialist_doctor && apiData.treatment_options ?
              <>
                <h1 className="font-poppins text-3xl text-center md:text-start">Preliminary Diagnosis</h1>
                <h1 className="font-poppins text-xl text-gray-500 text-center md:text-start">{apiData["preliminary_diagnosis"]}</h1>
                <h1 className="font-poppins text-3xl text-center md:text-start">Specialist Doctor</h1>
                <h1 className="font-poppins text-xl text-gray-500 text-center md:text-start">{apiData.specialist_doctor}</h1>
                <h1 className="font-poppins text-3xl text-center md:text-start">Treatment Options</h1>
                {
                  apiData.treatment_options.map((element, index) => (
                    <div className="flex items-center" key={index}>
                      <h1 className="font-poppins text-xl text-gray-600 mr-4">{element}</h1>
                      <YouTubeIcon className="text-red-700 cursor-pointer" onClick={() => handleYouTubeIconClick(element)}/>
                    </div>
                  ))
                }
              </>
              :
              <h1 className="font-poppins">No Disorder Found</h1>
            }
          </> :
          <>
            <h1 className="text-3xl text-center md:text-start font-bold font-poppins mb-4">Diagnosis of Neurological Disorders</h1>
            <div className="flex justify-center mt-5 mb-5">
              <form>
                <div className="flex justify-center w-full items-center flex-col mb-6">
                  <div className="w-full px-3 mb-6">
                    <label htmlFor="name" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="w-full px-3 mb-6">
                    <label htmlFor="gender" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Gender
                    </label>
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Select Gender</option>
                      <option value="boy">Boy</option>
                      <option value="Girl">Girl</option>
                    </select>
                  </div>
                  <div className="w-full px-3 mb-6">
                    <label htmlFor="age" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Age
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="w-full px-3 mb-6">
                    <label htmlFor="MedicalHistory" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Medical History:Past diagnoses, current medications, family history of neurological disorders, etc.
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="MedicalHistory"
                      value={MedicalHistory}
                      onChange={(e) => setMedicalHistory(e.target.value)}
                    />
                  </div>
                  <div className="w-full px-3 mb-6">
                    <label htmlFor="symptoms" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Symptoms:Specific symptoms experienced, onset and duration, severity, impact on daily life, etc.
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="symptoms"
                      value={symptoms}
                      onChange={(e) => setsymptoms(e.target.value)}
                    />
                  </div>
                  <div className="w-full px-3 mb-6">
                    <label htmlFor="FunctionalLimitations" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Functional Limitations: Difficulties with mobility, speech, cognitive function, etc.
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="FunctionalLimitations"
                      value={FunctionalLimitations}
                      onChange={(e) => setFunctionalLimitations(e.target.value)}
                    />
                  </div>

                  <div className="w-full px-3 flex justify-center">
                    {/* <button type="submit" className="w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button> */}
                    {loading ?
                      <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div> :
                      <div onClick={handleSubmit} className="text-white w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</div>}
                  </div>
                </div>
              </form>
            </div>
          </>}
      </div>
    </div>
  );
}

export default GeminiPro;
