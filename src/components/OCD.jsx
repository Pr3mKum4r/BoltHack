import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OCD = () => {
    const [Gender, setGender] = useState("");
    const [Ethnicity, setEthnicity] = useState("");
    const [PreviousDiagnoses, setPreviousDiagnoses] = useState("");
    const [FamilyHistory, setFamilyHistory] = useState("");
    const [ObsessionType, setObsessionType] = useState("");
    const [ObsessionScore, setObsessionScore] = useState("");
    const [CompulsionScore, setCompulsionScore] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        const data = {
            "Gender": Gender,
            "Ethnicity": Ethnicity,
            "PreviousDiagnoses": PreviousDiagnoses,
            "FamilyHistory": FamilyHistory,
            "ObsessionType": ObsessionType,
            "ObsessionScore": ObsessionScore,
            "CompulsionScore": CompulsionScore
        }
        const res = await axios.post("https://bolthack.onrender.com/ocd", data);
        console.log("Result from server: ", res.data);
        setLoading(false);
        if (res.data == "Yes") {
            navigate('/OCDTherapy');
        }
        else {
            navigate('/noOCD');
        }
    }


    return (
        <div className="px-5 md:px-0 flex justify-center flex-col items-center mx-auto">
            <div className="mx-5 flex justify-center flex-col items-center bg-gray-300 px-10 rounded my-10 min-h-[60vh] w-[70vw] md:w-[90vh]">
                <h1 className="text-3xl font-bold font-poppins mb-4 text-center">Diagnosis of OCD</h1>
                <div className="flex w-[75vw] justify-center mt-5 mb-5">
                    <form className="w-[650px] flex justify-center">
                        <div className="flex justify-center w-full items-center flex-col mb-6">
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="gender" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Gender
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="gender"
                                    value={Gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="gender" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Ethnicity
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Ethnicity"
                                    value={Ethnicity}
                                    onChange={(e) => setEthnicity(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Caucasian">Caucasian</option>
                                    <option value="African">African</option>
                                    <option value="Asian">Asian</option>
                                    <option value="Hispanic">Hispanic</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="gender" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Previous Diagnoses
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Previous Diagnoses"
                                    value={PreviousDiagnoses}
                                    onChange={(e) => setPreviousDiagnoses(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="None">None</option>
                                    <option value="GAD">GAD</option>
                                    <option value="MDD">MDD</option>
                                    <option value="Panic Disorder">Panic Disorder</option>
                                    <option value="PTSD">PTSD</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="gender" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Family History of OCD
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Family History of OCD"
                                    value={FamilyHistory}
                                    onChange={(e) => setFamilyHistory(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="gender" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Obsession Type
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Obsession Type"
                                    value={ObsessionType}
                                    onChange={(e) => setObsessionType(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Contamination">Contamination</option>
                                    <option value="Harm-related">Harm-related</option>
                                    <option value="Hoarding">Hoarding</option>
                                    <option value="Religious">Religious</option>
                                    <option value="Symmetry">Symmetry</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="age" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Y-BOCS Score (Obsessions)
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="obsessionScore"
                                    value={ObsessionScore}
                                    onChange={(e) => setObsessionScore(e.target.value)}
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="age" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Y-BOCS Score (Compulsions)
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="compulsionScore"
                                    value={CompulsionScore}
                                    onChange={(e) => setCompulsionScore(e.target.value)}
                                />
                            </div>

                            <div className="w-full px-3 flex justify-center">

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
            </div>
        </div>
    )
}

export default OCD;