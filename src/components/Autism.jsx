import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Autism = () => {
    const [a1, setA1] = useState(null);
    const [a2, setA2] = useState(null);
    const [a3, setA3] = useState(null);
    const [a4, setA4] = useState(null);
    const [a5, setA5] = useState(null);
    const [a6, setA6] = useState(null);
    const [a7, setA7] = useState(null);
    const [a8, setA8] = useState(null);
    const [a9, setA9] = useState(null);
    const [a10, setA10] = useState(null);
    const [age, setAge] = useState(null);
    const [scoreByQChat, setScoreByQChat] = useState(null);
    const [sex, setSex] = useState(null);
    const [ethnicity, setEthinicity] = useState(null);
    const [bornWithJaundice, setBornWithJaundice] = useState(null);
    const [familyWithASD, setFamilyWithASD] = useState(null);
    const [applicant, setApplicant] = useState(null);
    const [whyAreYouTake, setWhyAreYouTake] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        const data = {
            "a1": a1,
            "a2": a2,
            "a3": a3,
            "a4": a4,
            "a5": a5,
            "a6": a6,
            "a7": a7,
            "a8": a8,
            "a9": a9,
            "a10": a10,
            "age": age,
            "scoreByQChat": scoreByQChat,
            "sex": sex,
            "ethnicity": ethnicity,
            "bornWithJaundice": bornWithJaundice,
            "familyWithASD": familyWithASD,
            "applicant": applicant,
            "whyAreYouTake": whyAreYouTake
        }
        const res = await axios.post('https://bolthack.onrender.com/autism', data);
        console.log("Result from server : ", res.data)
        setLoading(false);
        if(res.data == "Yes"){
            navigate('/autismTherapy');
        }
        else{
            navigate('/noAutism');
        }
    }

    return (
        <div className="px-5 md:px-0 flex justify-center flex-col items-center mx-auto">
            <div className="flex justify-center flex-col items-center bg-gray-300 px-10 rounded my-10 min-h-[60vh] md:w-[90vh]">
                <h1 className="text-3xl font-bold font-poppins mb-4 text-center">Diagnosis of Autism</h1>
                <div className="flex justify-center mt-5 mb-5">
                    <form>
                        <div className="flex justify-center w-full items-center flex-col mb-6">
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q1" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Does your child look at you when you call his/her name?
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q1"
                                    value={a1}
                                    onChange={(e) => setA1(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q2" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    How easy is it for you to get eye contact with your child?
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q2"
                                    value={a2}
                                    onChange={(e) => setA2(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q3" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q3"
                                    value={a3}
                                    onChange={(e) => setA3(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Does your child point to share interest with you? (e.g. poin9ng at an interesting sight)
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q4"
                                    value={a4}
                                    onChange={(e) => setA4(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q5" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Does your child pretend? (e.g. care for dolls, talk on a toy phone)
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q5"
                                    value={a5}
                                    onChange={(e) => setA5(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Does your child follow where you’re looking?
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q6"
                                    value={a6}
                                    onChange={(e) => setA6(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    If you or someone else in the family is visibly upset, does your child show signs of wan9ng to comfort them? (e.g. stroking hair, hugging them)
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q7"
                                    value={a7}
                                    onChange={(e) => setA7(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Would you describe your child&apos;s first words as:
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q8"
                                    value={a8}
                                    onChange={(e) => setA8(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Does your child use simple gestures? (e.g. wave goodbye)
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q9"
                                    value={a9}
                                    onChange={(e) => setA9(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Does your child stare at nothing with no apparent purpose?
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Q10"
                                    value={a10}
                                    onChange={(e) => setA10(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
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
                                <label htmlFor="age" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Score by Q-Chat-10 (1-10, Less than or equal 3 no ASD traits; &gt; 3 ASD traits)
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="QChatScore"
                                    value={scoreByQChat}
                                    onChange={(e) => setScoreByQChat(e.target.value)}
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Sex
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="sex"
                                    value={sex}
                                    onChange={(e) => setSex(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="m">Male</option>
                                    <option value="f">Female</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="age" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Ethnicity
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="Ethnicity"
                                    value={ethnicity}
                                    onChange={(e) => setEthinicity(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Asian">Asian</option>
                                    <option value="Middle Eastern">Middle Eastern</option>
                                    <option value="White European">White European</option>
                                    <option value="Hispanic">Hispanic</option>
                                    <option value="Black">Black</option>
                                    <option value="South Asian">South Asian</option>
                                    <option value="Native Indian">Native Indian</option>
                                    <option value="Latino">Latino</option>
                                    <option value="Mixed">Mixed</option>
                                    <option value="Pacifica">Pacifica</option>
                                    <option value="Turkish">Turkish</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Born with Jaundice
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="jaundice"
                                    value={bornWithJaundice}
                                    onChange={(e) => setBornWithJaundice(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Family member with ASD history
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="familyWithASD"
                                    value={familyWithASD}
                                    onChange={(e) => setFamilyWithASD(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="Q4" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Who is completing the test
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="applicant"
                                    value={applicant}
                                    onChange={(e) => setApplicant(e.target.value)}
                                >
                                    <option value="">Select Answer</option>
                                    <option value="family member">family member</option>
                                    <option value="Health Care Professional">Health Care Professional</option>
                                    <option value="Self">Self</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label htmlFor="age" className="font-poppins block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Why are you taking the test ?
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="whyAreYouTake"
                                    value={whyAreYouTake}
                                    onChange={(e) => setWhyAreYouTake(e.target.value)}
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

export default Autism;