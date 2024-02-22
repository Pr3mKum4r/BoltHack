import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

function GeminiPro() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [MedicalHistory, setMedicalHistory] = useState("");
  const [symptoms, setsymptoms] = useState("");
  const [FunctionalLimitations, setFunctionalLimitations] = useState("");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCMdBP76wyidbFx3SCNEQ5AGXVPTwvKpZI"
  );

  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `The age of the person is ${age},The gender of the person is ${gender} the Medical history(Past diagnoses, current medications, family history of neurological disorders, etc) is: ${MedicalHistory} , the symptoms(Specific symptoms experienced, onset and duration, severity, impact on daily life, etc) are ${symptoms},the functional limitations( Difficulties with mobility, speech, cognitive function, etc) are :${FunctionalLimitations}  suggest which neurological disorder the person has as a preliminary research purpose diagnosis and its treatment options adn reccomend visiting the specialist doctor related to this disorder  `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setApiData(text);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(name, gender, age , MedicalHistory, symptoms);
    fetchData();
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Diagnosis of Neurological Disorders</h1>
      <div className="mt-5 mb-5">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="gender" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Gender
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="boy">Boy</option>
                <option value="Girl">Girl</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="age" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Age
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="MedicalHistory" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Medical History:Past diagnoses, current medications, family history of neurological disorders, etc.
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="MedicalHistory"
                value={MedicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="symptoms" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Symptoms:Specific symptoms experienced, onset and duration, severity, impact on daily life, etc.
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="symptoms"
                value={symptoms}
                onChange={(e) => setsymptoms(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="FunctionalLimitations" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Functional Limitations: Difficulties with mobility, speech, cognitive function, etc.
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="FunctionalLimitations"
                value={FunctionalLimitations}
                onChange={(e) => setFunctionalLimitations(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="">
        {!loading && <p className="text-left">{apiData}</p>}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default GeminiPro;
