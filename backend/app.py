from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
autism_model = pickle.load(open('gradient_boosting_model.pkl', 'rb'))
dyslexia_model=pickle.load(open('pickle/dyslexia_model.pkl', 'rb'))

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

@app.route('/test', methods=['GET'])
def hello_world():
    if request.method == 'GET':
        return "Welcome to the server"
        

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
        # data = request.json
        data={
            "Gender": "M",
            "Nativelang": "Yes",
            "Otherlang": "Spanish",
            "Age": 30,
            "Clicks1": 50,
            "Hits1": 45,
            "Misses1": 5,
            "Score1": 90,
            "Accuracy1": 0.9,
            "Missrate1": 0.1,
            "Clicks2": 48,
            "Hits2": 46,
            "Misses2": 2,
            "Score2": 95.8,
            "Accuracy2": 0.958,
            "Missrate2": 0.042,
            "Clicks3": 55,
            "Hits3": 50,
            "Misses3": 5,
            "Score3": 90.9,
            "Accuracy3": 0.909,
            "Missrate3": 0.091,
            "Clicks4": 60,
            "Hits4": 55,
            "Misses4": 5,
            "Score4": 91.7,
            "Accuracy4": 0.917,
            "Missrate4": 0.083,
            "Clicks5": 58,
            "Hits5": 56,
            "Misses5": 2,
            "Score5": 96.6,
            "Accuracy5": 0.966,
            "Missrate5": 0.034,
            "Clicks6": 62,
            "Hits6": 58,
            "Misses6": 4,
            "Score6": 93.5,
            "Accuracy6": 0.935,
            "Missrate6": 0.065,
            "Clicks7": 65,
            "Hits7": 63,
            "Misses7": 2,
            "Score7": 96.9,
            "Accuracy7": 0.969,
            "Missrate7": 0.031,
            "Clicks8": 70,
            "Hits8": 67,
            "Misses8": 3,
            "Score8": 95.7,
            "Accuracy8": 0.957,
            "Missrate8": 0.043,
            "Clicks9": 72,
            "Hits9": 70,
            "Misses9": 2,
            "Score9": 97.2,
            "Accuracy9": 0.972,
            "Missrate9": 0.028,
            "Clicks10": 75,
            "Hits10": 73,
            "Misses10": 2,
            "Score10": 97.3,
            "Accuracy10": 0.973,
            "Missrate10": 0.027,
            "Clicks11": 80,
            "Hits11": 78,
            "Misses11": 2,
            "Score11": 97.5,
            "Accuracy11": 0.975,
            "Missrate11": 0.025,
            "Clicks12": 85,
            "Hits12": 83,
            "Misses12": 2,
            "Score12": 97.6,
            "Accuracy12": 0.976,
            "Missrate12": 0.024,
            "Clicks14": 90,
            "Hits14": 88,
            "Misses14": 2,
            "Score14": 97.8,
            "Accuracy14": 0.978,
            "Missrate14": 0.022,
            "Clicks15": 95,
            "Hits15": 93,
            "Misses15": 2,
            "Score15": 98.0,
            "Accuracy15": 0.98,
            "Missrate15": 0.02,
            "Clicks16": 98,
            "Hits16": 96,
            "Misses16": 2,
            "Score16": 98.2,
            "Accuracy16": 0.982,
            "Missrate16": 0.018,
            "Clicks17": 100,
            "Hits17": 98,
            "Misses17": 2,
            "Score17": 98.3,
            "Accuracy17": 0.983,
            "Missrate17": 0.017,
            "Clicks22": 105,
            "Hits22": 103,
            "Misses22": 2,
            "Score22": 98.5,
            "Accuracy22": 0.985,
            "Missrate22": 0.015,
            "Clicks23": 110,
            "Hits23": 108,
            "Misses23": 2,
            "Score23": 98.6,
            "Accuracy23": 0.986,
            "Missrate23": 0.014,
            "Clicks30": 120,
            "Hits30": 118,
            "Misses30": 2,
            "Score30": 98.7,
            "Accuracy30": 0.987,
            "Missrate30": 0.013
            }
        input=[]
        input.append(converter(data['Gender']))
        input.append(converter(data['Nativelang']))
        input.append(converter(data['Otherlang']))
        data.pop('Gender')
        data.pop('Nativelang')
        data.pop('Otherlang')
        for i in data.keys():
            input.append(data[i])
        input_to_model=np.array([input])
        predicted=dyslexia_model.predict(input_to_model)
        return rev_convert(predicted)







# OCD MODEL
ocd_model = pickle.load(open('pickle/ocd.pkl', 'rb'))

ethinicity_mapping = {'Caucasian':0, 'African':1, 'Asian':2, 'Hispanic':3}
gender_mapping = {'Male':0, 'Female':1}
previous_diagnosis_mapping = {'None':0, 'GAD':1, 'MDD':2, 'Panic Disorder':3, 'PTSD':4}
family_history_mapping = {'Yes':1, 'No':0}
obsession_mapping = {'Contamination':0, 'Harm-related':1, 'Hoarding':2, 'Religious':3, 'Symmetry':4}

@app.route('/ocd', methods=['POST'])
def predict_ocd():
    if request.method == 'POST':
        data = request.json
        print(data)
        Gender = gender_mapping[data['Gender']]
        Ethnicity = ethinicity_mapping[data['Ethnicity']]
        MaritalStatus =  0 
        PreviousDiagnoses = previous_diagnosis_mapping[data['PreviousDiagnoses']]
        FamilyHistory = family_history_mapping[data['FamilyHistory']]
        ObsessionType = obsession_mapping[data['ObsessionType']]
        ObsessionScore = int(data['ObsessionScore'])
        CompulsionScore = int(data['CompulsionScore'])
        
        # Prepare the input data for the model
        input=[
            Gender,
            Ethnicity,
            MaritalStatus,
            PreviousDiagnoses,
            FamilyHistory,
            ObsessionType,
            ObsessionScore,
            CompulsionScore
        ]
        print(input)
        input_to_model = np.array([input])
        print(input_to_model)
        predicted = ocd_model.predict(input_to_model)
        print(predicted)
        response_data = {'prediction': predicted[0]}
        
        return rev_convert(predicted)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000 )
