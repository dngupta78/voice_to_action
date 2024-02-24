from pymongo import MongoClient
 
client = MongoClient('mongodb://localhost:27017/')
 
db = client['mydatabase']  
collection = db['diagnosis_questions']  
responses_collection = db['patient_diagnosis_responses']
 
def get_question(question_key):
    document = collection.find_one({"_id": question_key})
    return document["question"] if document else "I don't understand that."
 
def get_response(question_key, user_response):
    response_doc = responses_collection.find_one({"diagnosis_id": "2", question_key: user_response})
    return response_doc if response_doc else None
 
def chat():
    print("Hello, I'm your health assistant. Let's start our diagnosis session.")
    user_name = input("First, please tell me your name: ")
    current_question_key = "q_intro"
    while True:
        question = get_question(current_question_key)
        print(question.format(user_name))  
        user_response = input()  
        if current_question_key == "q_intro" and "no issues" in user_response.lower():
            print(get_question("q_bye_no_issue"))
            break
        response_doc = get_response(current_question_key, user_response)
        if response_doc:
                if "reply" in key:
                    print(response_doc[key])  
                    print("Have a good day!")  
                    return
                elif "q_" in key:  
                    current_question_key = key  
                    break
        else:
            print("Sorry, I don't understand.")
 
if __name__ == "__main__":
    chat()