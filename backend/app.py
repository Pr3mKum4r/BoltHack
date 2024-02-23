from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
autism_model = pickle.load(open('gradient_boosting_model.pkl', 'rb'))
# ocd_model=pickle.load(open('ocd.pkl', 'rb'))

CORS(app)
CORS(app, origins='http://localhost:5173', methods=['POST'], headers=['Content-Type'])



# Example usage

categories_to_encode = ['Family Member', 'Health Care Professional', 'Self', 'Others',
                         'School and NGO', 'Parent', '?', 'Relative']


def converter(input):
    if (input == 'Yes' or input == "m"):
        return 1
    return 0

def rev_convert(input):
    if(input==1):
        return "Yes"
    return 'No'
def one_hot_encode_category(category, categories_to_encode):
    # Create a dictionary to map categories to their corresponding indices
    category_to_index = {cat: i for i, cat in enumerate(categories_to_encode)}

    # Initialize an array of zeros with the length of categories
    one_hot_encoded = [0] * len(categories_to_encode)

    # Check if the provided category is in the categories
    if category in category_to_index:
        # Set the corresponding index to 1
        one_hot_encoded[category_to_index[category]] = 1

    return one_hot_encoded





def one_hot_encode_ethnicity(ethnicity):
    # Define the categories for one-hot encoding
    categories_to_encode = ['Middle Eastern', 'White European', 'Hispanic', 'Black', 'Asian',
                            'South Asian', 'Native Indian', 'Others', 'Latino', 'Mixed', 'Pacifica',
                            'White-European', '?', 'Turkish', 'others']

    # Create a dictionary to map categories to their corresponding indices
    category_to_index = {category: i for i, category in enumerate(categories_to_encode)}

    # Initialize an array of zeros with the length of categories
    one_hot_encoded = [0] * len(categories_to_encode)

    # Check if the provided ethnicity is in the categories
    if ethnicity in category_to_index:
        # Set the corresponding index to 1
        one_hot_encoded[category_to_index[ethnicity]] = 1

    return one_hot_encoded


@app.route('/')
def hello_world():
    return 'Hello World'


@app.route('/autism', methods=['POST'])
def predict_autism():
    if request.method == 'POST':
        data = request.json
        a1 = converter(data['a1'])
        a2 = converter(data['a2'])
        a3 = converter(data['a3'])
        a4 = converter(data['a4'])
        a5 = converter(data['a5'])
        a6 = converter(data['a6'])
        a7 = converter(data['a7'])
        a8 = converter(data['a8'])
        a9 = converter(data['a9'])
        a10 = converter(data['a10'])
        age = int(data['age'])

        scoreByQChat = int(data['scoreByQChat'])
        sex = converter(data['sex'])
        ethnicity = data['ethnicity']
        bornWithJaundice = converter(data['bornWithJaundice'])
        familyWithASD = converter(data['familyWithASD'])
        applicant = data['applicant']
        ethnicity_one_hot = one_hot_encode_ethnicity(ethnicity)
        one_hot_encoded_category = one_hot_encode_category(applicant, categories_to_encode)
        # whyAreYouTake=data['whyAreYouTake']
        input = [
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
            a7,
            a8,
            a9,
            a10,
            age,
            scoreByQChat,
            sex,
            bornWithJaundice,
            familyWithASD,
            # applicant
            # whyAreYouTake
        ]
        print(input,len(input))
        input[-1:-1] = ethnicity_one_hot
        print(input,len(input))
        input[-1:-1] = one_hot_encoded_category
        print (input,len(input))
        input_to_model = np.array([input[:-2]])
        # predicted = 'Null'
        # model=pickle.load(open('autism_gradient_boosting_model.pkl','rb'))
        # predicted=model.predict(input_to_model)
        # with open('D:\Project upload\\bolthack\\autism.pkl', 'rb') as f:
        #     model = pickle.load(f)
        #     predicted=model.predict(input_to_model)
        predicted = autism_model.predict(input_to_model)
        print("predicted",predicted)
        return rev_convert(predicted[0])


@app.route('/dyslexia', methods=['POST'])
def predict_dyslexia():
    if request.method == 'POST':
        data = request.json

        response_data = {}
        return response_data


@app.route('/ocd', methods=['POST'])
def predict_ocd():
    if request.method == 'POST':
        data = request.json
        # DiagnosisDate=data	
        # Age=	
        # Gender=	data['gender']
        # Ethnicity=data['ethnicity']
        # MaritalStatus=	0
        # EducationLevel=	
        # SymptomsDuration=	
        # PreviousDiagnoses=	data['previous_diagnosis']
        # FamilyHistory=	data['family_history']
        # ObsessionType=	data['observation_type']
        # YBocs=	data['ybocs']
        # ObsessionScore=	
        # CompulsionScore=	
        # DepressionDiagnosis=	
        # AnxietyDiagnosis=	
        # Medications=
        # input=[
        #     Gender,
        #     Ethnicity,
        #     PreviousDiagnoses,
        #     FamilyHistory,
        #     ObsessionType,
        #     YBocs
        # ]
        # input_to_model=np.array([input])
        # predicted=rev_convert(ocd_model.predict(input_to_model))

        response_data = {}
        return response_data


if __name__ == '__main__':
    app.run()